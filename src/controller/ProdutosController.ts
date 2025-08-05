import type { Request, Response } from "express"
import * as dao from "../persistence/ProdutosDAO.js"
import type { IProduto } from "../object/interface/IProduto.js"
import type { IPromocao } from "../object/interface/IPromocao.js"
import * as produtoObject from "../object/function/Produto.js"
import * as promocaoObject from "../object/function/Promocao.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((usuario : any) => {
        if (usuario === null){
            return res.status(404).json({
                "message" : "Usuário Inexistente"
            })
        }

        return res.status(200).json(produtoObject.JSONToObject(usuario))
    })
}

async function findAll(req : Request, res : Response) {
    dao.findAll().then((produtos : any) => {
        const produtosList : IProduto[] = []

        for (let produto of produtos) {
            produtosList.push(produtoObject.JSONToObject(produto))
        }
    
        return res.status(200).json(produtosList)
    })
}

async function findAllByPromocoes(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findAllByPromocoes(id).then((promocoes : any) => {
        const promocoesList : IPromocao[] = []

        for (let promocao of promocoes) {
            promocoesList.push(promocaoObject.JSONToObject(promocao))
        }
    
        return res.status(200).json(promocoesList)
    })
}

async function create(req : Request, res : Response) {
    const produto : any = req.body
    const produtoData : IProduto = produtoObject.objectToJSON(produto)

    dao.create(produtoData).then((produto : any) => {
        if (produto === null){
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
    const produto : any = req.body
    const produtoData : IProduto = produtoObject.objectToJSON(produto)

    dao.update(id, produtoData).then((produto : any) => {
        let produtoRegister : string = ""

        if (produto !== null) {
            produtoRegister = produto.toString()
        }
    
        if (produto === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (produtoRegister === '0'){
            return res.status(404).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (produtoRegister === '1'){
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
            res.status(404).json({
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
    findAllByPromocoes,
    create,
    update,
    destroy
}