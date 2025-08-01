import type { Request, Response } from "express"
import * as dao from "../persistence/ChamadosDAO.js"
import type { IChamado } from "../object/interface/IChamado.js"
import { JSONToObject, objectToJSON } from "../object/function/Chamado.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((chamado : any) => {
        if (chamado === null){
            return res.status(400).json({
                "message" : "Usuário Inexistente"
            })
        }
        return res.status(200).json(JSONToObject(chamado))
    })
}

async function findAll(req : Request, res : Response) {
    let chamados : any[] = []

    dao.findAll().then((listChamados : any) => {
        chamados = listChamados
    })

    return res.status(200).json(chamados)
}

async function create(req : Request, res : Response) {
    const chamado : any = req.body
    const chamadoData : IChamado = objectToJSON(chamado)

    dao.create(chamadoData).then((chamado : any) => {
        if (chamado === null){
            return res.status(400).json({
                "message" : "Criação de Registro Não Aceita"
            })
        }
        return res.status(200).json(chamado)
    })
}

async function update(req : Request, res : Response) {
    const id : number = Number(req.params.id)
    const chamado : any = req.body
    const chamadoData : IChamado = objectToJSON(chamado)

    dao.update(id, chamadoData).then((chamado : any) => {
        if (chamado === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (chamado.includes(0)){
            return res.status(400).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (chamado.includes(1)){
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
            res.status(400).json({
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
    create,
    update,
    destroy
}