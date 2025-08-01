import type { Request, Response } from "express"
import * as dao from "../persistence/AdministradoresDAO.js"
import type { IAdministrador } from "../object/interface/IAdministrador.js"
import { JSONToObject, objectToJSON } from "../object/function/Administrador.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((administrador : any) => {
        if (administrador === null){
            return res.status(400).json({
                "message" : "Usuário Inexistente"
            })
        }
        return res.status(200).json(JSONToObject(administrador))
    })
}

async function findAll(req : Request, res : Response) {
    let administradores : any[] = []

    dao.findAll().then((listAdministradores : any) => {
        administradores = listAdministradores
    })

    return res.status(200).json(administradores)
}

async function create(req : Request, res : Response) {
    const administrador : any = req.body
    const administradorData : IAdministrador = objectToJSON(administrador)

    dao.create(administradorData).then((administrador : any) => {
        if (administrador === null){
            return res.status(400).json({
                "message" : "Criação de Registro Não Aceita"
            })
        }
        return res.status(200).json(administrador)
    })
}

async function update(req : Request, res : Response) {
    const id : number = Number(req.params.id)
    const administrador : any = req.body
    const administradorData : IAdministrador = objectToJSON(administrador)

    dao.update(id, administradorData).then((administrador : any) => {
        if (administrador === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (administrador.includes(0)){
            return res.status(400).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (administrador.includes(1)){
            return res.status(200).json({
                "message" : "Registro Atualizado"
            })
        }
    })
}

async function destroy(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.destroy(id).then((administrador : any) => {
        if (administrador === 0){
            res.status(400).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (administrador === 1){
            res.status(200).json({
                "message" : "Registro Apagado"
            })
        }
    })
}



export {
    findOne,
    findAll,
    create,
    update,
    destroy
}