import jwt from "jsonwebtoken"
import type sequelize from "sequelize"
import type { Model } from "sequelize"
import type { NextFunction, Request, Response } from "express";
import { environmentVariables } from "./EnvironmentVariables.js";
import { databaseModels } from "../model/Connection.js"



const usuarios : sequelize.ModelStatic<Model> = databaseModels["usuarios"]
const blacklist : any = {}



async function authentication (nomeUsuario : string, senha : string) {
    try {
        const usuario = await usuarios.findOne({
            where: {
                nome_usuario : nomeUsuario,
                senha : senha 
            },
            logging: false,
            raw: true
        })

        return usuario
    } catch (err) {
        return null
    }
}

async function login(req : Request, res : Response) {
    const nomeUsuario : string = req.body.nome_usuario
    const senha : string = req.body.senha

    const authUser : any = await authentication(nomeUsuario, senha)
    if (authUser === null) {
        return res.status(401).json({
            "message" : "Usuário ou senha invalidos"
        })
    }

    const id : number = authUser["id_usuario"]
    const token = jwt.sign({ id }, environmentVariables["JWTSecret"])

    return res.status(200).json({
        "message" : "Conta conectada com sucesso",
        "token": token 
    })
}

function logout(req : Request, res : Response) {
    const token = req.headers["authorization"]?.replace("Bearer ", "")
    blacklist[token as any] = true
    return res.status(200).json({
        "message" : "Conta desconectada com sucesso",
        "token" : null
    })
}

function verifyAuth (req : Request, res : Response, next : NextFunction) {
    let token : string | undefined = req.headers["authorization"]
    if(!token) {
        return res.status(401).json({
            "message" : "Login não realizado"
        })
    }

    token = req.headers["authorization"]?.replace("Bearer ", "")

    if(blacklist[token as any]) {
        return res.status(403).json({
            "message" : "Acesso inválido"
        })
    }

    try {
        const decoded = jwt.verify(token as string, environmentVariables["JWTSecret"])

        if(!decoded) {
            return res.status(403).json({
                "message" : "Acesso inválido"
            })
        }

        res.locals.token = decoded
        return next()
    } catch (err) {
        return res.status(403).json({
            "message" : "O acesso não foi aceito"
        })
    }
}



export {
    login,
    logout,
    verifyAuth
}