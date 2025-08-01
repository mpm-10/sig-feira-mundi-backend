import type { Request, Response } from "express"
import * as dao from "../persistence/ComerciosDAO.js"
import type { IComercio } from "../object/interface/IComercio.js"
import { JSONToObject, objectToJSON } from "../object/function/Comercio.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((comercio : any) => {
        if (comercio === null){
            return res.status(400).json({
                "message" : "Usuário Inexistente"
            })
        }
        return res.status(200).json(JSONToObject(comercio))
    })
}

async function findAll(req : Request, res : Response) {
    let comercios : any[] = []

    dao.findAll().then((listComercios : any) => {
        comercios = listComercios
    })

    return res.status(200).json(comercios)
}

async function create(req : Request, res : Response) {
    const comercio : any = req.body
    const comercioData : IComercio = objectToJSON(comercio)

    dao.create(comercioData).then((comercio : any) => {
        if (comercio === null){
            return res.status(400).json({
                "message" : "Criação de Registro Não Aceita"
            })
        }
        return res.status(200).json(comercio)
    })
}

async function update(req : Request, res : Response) {
    const id : number = Number(req.params.id)
    const comercio : any = req.body
    const comercioData : IComercio = objectToJSON(comercio)

    dao.update(id, comercioData).then((comercio : any) => {
        if (comercio === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (comercio.includes(0)){
            return res.status(400).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (comercio.includes(1)){
            return res.status(200).json({
                "message" : "Registro Atualizado"
            })
        }
    })
}

async function destroy(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.destroy(id).then((comercio : any) => {
        if (comercio === 0){
            res.status(400).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (comercio === 1){
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