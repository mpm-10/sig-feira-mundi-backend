import type { Request, Response } from "express"
import * as dao from "../persistence/PromocoesDAO.js"
import type { IPromocao } from "../object/interface/IPromocao.js"
import { JSONToObject, objectToJSON } from "../object/function/Promocao.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((promocao : any) => {
        if (promocao === null){
            return res.status(400).json({
                "message" : "Usuário Inexistente"
            })
        }
        return res.status(200).json(JSONToObject(promocao))
    })
}

async function findAll(req : Request, res : Response) {
    let promocoes : any[] = []

    dao.findAll().then((listPromocoes : any) => {
        promocoes = listPromocoes
    })

    return res.status(200).json(promocoes)
}

async function create(req : Request, res : Response) {
    const promocao : any = req.body
    const promocaoData : IPromocao = objectToJSON(promocao)

    dao.create(promocaoData).then((promocao : any) => {
        if (promocao === null){
            return res.status(400).json({
                "message" : "Criação de Registro Não Aceita"
            })
        }
        return res.status(200).json(promocao)
    })
}

async function update(req : Request, res : Response) {
    const id : number = Number(req.params.id)
    const promocao : any = req.body
    const promocaoData : IPromocao = objectToJSON(promocao)

    dao.update(id, promocaoData).then((promocao : any) => {
        if (promocao === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (promocao.includes(0)){
            return res.status(400).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (promocao.includes(1)){
            return res.status(200).json({
                "message" : "Registro Atualizado"
            })
        }
    })
}

async function destroy(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.destroy(id).then((promocao : any) => {
        if (promocao === 0){
            res.status(400).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (promocao === 1){
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