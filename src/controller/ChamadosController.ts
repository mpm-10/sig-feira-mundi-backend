import type { Request, Response } from "express"
import * as dao from "../persistence/ChamadosDAO.js"
import type { IAdministrador } from "../object/interface/IAdministrador.js"
import type { IChamado } from "../object/interface/IChamado.js"
import * as administradorObject from "../object/function/Administrador.js"
import * as chamadoObject from "../object/function/Chamado.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((usuario : any) => {
        if (usuario === null){
            return res.status(404).json({
                "message" : "Usuário Inexistente"
            })
        }

        return res.status(200).json(chamadoObject.JSONToObject(usuario))
    })
}

async function findAll(req : Request, res : Response) {
    dao.findAll().then((chamados : any) => {
        const chamadosList : IChamado[] = []

        for (let chamado of chamados) {
            chamadosList.push(chamadoObject.JSONToObject(chamado))
        }
    
        return res.status(200).json(chamadosList)
    })
}

async function findAllByResolucaoChamados(req : Request, res : Response) {
    const id : number = Number(req.params.id)
    
    dao.findAllByResolucaoChamados(id).then((administradores : any) => {
        const administradorList : IAdministrador[] = []

        for (let administrador of administradores) {
            administradorList.push(administradorObject.JSONToObject(administrador))
        }
    
        return res.status(200).json(administradorList)
    })
}

async function create(req : Request, res : Response) {
    const chamado : any = req.body
    const chamadoData : IChamado = chamadoObject.objectToJSON(chamado)

    dao.create(chamadoData).then((chamado : any) => {
        if (chamado === null){
            return res.status(400).json({
                "message" : "Criação de Registro Não Aceita"
            })
        }
        return res.status(200).json({
            "message" : "Registro de Usuário Realizado"
        })
    })
}

async function update(req : Request, res : Response) {
    const id : number = Number(req.params.id)
    const chamado : any = req.body
    const chamadoData : IChamado = chamadoObject.objectToJSON(chamado)

    dao.update(id, chamadoData).then((chamado : any) => {
        let chamadoRegister : string = chamado.toString()

        if (chamado !== null) {
            chamadoRegister = chamado.toString()
        }
    
        if (chamado === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (chamadoRegister === '0'){
            return res.status(404).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (chamadoRegister === '1'){
            return res.status(200).json({
                "message" : "Registro Atualizado"
            })
        }
    })
}

async function destroy(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.destroy(id).then((chamado : any) => {
        if (chamado === 0){
            res.status(404).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (chamado === 1){
            res.status(200).json({
                "message" : "Registro Apagado"
            })
        }
    })
}



export {
    findOne,
    findAll,
    findAllByResolucaoChamados,
    create,
    update,
    destroy
}