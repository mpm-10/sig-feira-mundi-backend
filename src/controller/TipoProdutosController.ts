import type { Request, Response } from "express"
import * as dao from "../persistence/TipoProdutosDAO.js"
import type { ITipoProduto } from "../object/interface/ITipoProduto.js"
import { JSONToObject, objectToJSON } from "../object/function/TipoProduto.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((tipoProduto : any) => {
        if (tipoProduto === null){
            return res.status(400).json({
                "message" : "Usuário Inexistente"
            })
        }
        return res.status(200).json(JSONToObject(tipoProduto))
    })
}

async function findAll(req : Request, res : Response) {
    let tipoProdutos : any[] = []

    dao.findAll().then((listTipoProdutos : any) => {
        tipoProdutos = listTipoProdutos
    })

    return res.status(200).json(tipoProdutos)
}

async function create(req : Request, res : Response) {
    const tipoProduto : any = req.body
    const tipoProdutoData : ITipoProduto = objectToJSON(tipoProduto)

    dao.create(tipoProdutoData).then((tipoProduto : any) => {
        if (tipoProduto === null){
            return res.status(400).json({
                "message" : "Criação de Registro Não Aceita"
            })
        }
        return res.status(200).json(tipoProduto)
    })
}

async function update(req : Request, res : Response) {
    const id : number = Number(req.params.id)
    const tipoProduto : any = req.body
    const tipoProdutoData : ITipoProduto = objectToJSON(tipoProduto)

    dao.update(id, tipoProdutoData).then((tipoProduto : any) => {
        if (tipoProduto === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (tipoProduto.includes(0)){
            return res.status(400).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (tipoProduto.includes(1)){
            return res.status(200).json({
                "message" : "Registro Atualizado"
            })
        }
    })
}

async function destroy(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.destroy(id).then((tipoProduto : any) => {
        if (tipoProduto === 0){
            res.status(400).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (tipoProduto === 1){
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