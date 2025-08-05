import type { Request, Response } from "express"
import * as dao from "../persistence/TipoProdutosDAO.js"
import type { ITipoProduto } from "../object/interface/ITipoProduto.js"
import type { IProduto } from "../object/interface/IProduto.js"
import type { ICliente } from "../object/interface/ICliente.js"
import * as clienteObject from "../object/function/Cliente.js"
import * as tipoProdutoObject from "../object/function/TipoProduto.js"
import * as produtoObject from "../object/function/Produto.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((usuario : any) => {
        if (usuario === null){
            return res.status(404).json({
                "message" : "Usuário Inexistente"
            })
        }

        return res.status(200).json(tipoProdutoObject.JSONToObject(usuario))
    })
}

async function findAll(req : Request, res : Response) {
    dao.findAll().then((tipoProdutos : any) => {
        const tipoProdutosList : ITipoProduto[] = []

        for (let tipoProduto of tipoProdutos) {
            tipoProdutosList.push(tipoProdutoObject.JSONToObject(tipoProduto))
        }
    
        return res.status(200).json(tipoProdutosList)
    })
}

async function findAllByProdutos(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findAllByProdutos(id).then((produtos : any) => {
        const produtosList : IProduto[] = []

        for (let produto of produtos) {
            produtosList.push(produtoObject.JSONToObject(produto))
        }
        return res.status(200).json(produtosList)
    })
}

async function findAllByProdutosFavoritos(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findAllByProdutosFavoritos(id).then((clientes : any) => {
        const clientesList : ICliente[] = []

        for (let cliente of clientes) {
            clientesList.push(clienteObject.JSONToObject(cliente))
        }
        return res.status(200).json(clientesList)
    })
}

async function create(req : Request, res : Response) {
    const tipoProduto : any = req.body
    const tipoProdutoData : ITipoProduto = tipoProdutoObject.objectToJSON(tipoProduto)

    dao.create(tipoProdutoData).then((tipoProduto : any) => {
        if (tipoProduto === null){
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
    const tipoProduto : any = req.body
    const tipoProdutoData : ITipoProduto = tipoProdutoObject.objectToJSON(tipoProduto)

    dao.update(id, tipoProdutoData).then((tipoProduto : any) => {
        let tipoProdutoRegister : string = ""

        if (tipoProduto !== null) {
            tipoProdutoRegister = tipoProduto.toString()
        }
    
        if (tipoProduto === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (tipoProdutoRegister === '0'){
            return res.status(404).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (tipoProdutoRegister === '1'){
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
            res.status(404).json({
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
    findAllByProdutos,
    findAllByProdutosFavoritos,
    create,
    update,
    destroy
}