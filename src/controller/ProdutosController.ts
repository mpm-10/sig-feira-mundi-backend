import type { Request, Response } from "express"
import * as dao from "../persistence/ProdutosDAO.js"
import type { IProduto } from "../object/interface/IProduto.js"
import { JSONToObject, objectToJSON } from "../object/function/Produto.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((produto : any) => {
        if (produto === null){
            return res.status(400).json({
                "message" : "Usuário Inexistente"
            })
        }
        return res.status(200).json(JSONToObject(produto))
    })
}

async function findAll(req : Request, res : Response) {
    let produtos : any[] = []

    dao.findAll().then((listProdutos : any) => {
        produtos = listProdutos
    })

    return res.status(200).json(produtos)
}

async function create(req : Request, res : Response) {
    const produto : any = req.body
    const produtoData : IProduto = objectToJSON(produto)

    dao.create(produtoData).then((produto : any) => {
        if (produto === null){
            return res.status(400).json({
                "message" : "Criação de Registro Não Aceita"
            })
        }
        return res.status(200).json(produto)
    })
}

async function update(req : Request, res : Response) {
    const id : number = Number(req.params.id)
    const produto : any = req.body
    const produtoData : IProduto = objectToJSON(produto)

    dao.update(id, produtoData).then((produto : any) => {
        if (produto === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (produto.includes(0)){
            return res.status(400).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (produto.includes(1)){
            return res.status(200).json({
                "message" : "Registro Atualizado"
            })
        }
    })
}

async function destroy(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.destroy(id).then((produto : any) => {
        if (produto === 0){
            res.status(400).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (produto === 1){
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