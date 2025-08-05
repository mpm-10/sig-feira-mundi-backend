import type { Request, Response } from "express"
import * as dao from "../persistence/ComerciosDAO.js"
import type { IComercio } from "../object/interface/IComercio.js"
import type { IPromocao } from "../object/interface/IPromocao.js"
import type { IProduto } from "../object/interface/IProduto.js"
import type { ICliente } from "../object/interface/ICliente.js"
import * as clienteObject from "../object/function/Cliente.js"
import * as comercioObject from "../object/function/Comercio.js"
import * as promocaoObject from "../object/function/Promocao.js"
import * as produtoObject from "../object/function/Produto.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((usuario : any) => {
        if (usuario === null){
            return res.status(404).json({
                "message" : "Usuário Inexistente"
            })
        }

        return res.status(200).json(comercioObject.JSONToObject(usuario))
    })
}

async function findAll(req : Request, res : Response) {
    dao.findAll().then((comercios : any) => {
        const comerciosList : IComercio[] = []

        for (let comercio of comercios) {
            comerciosList.push(comercioObject.JSONToObject(comercio))
        }
    
        return res.status(200).json(comerciosList)
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

async function findAllByAvaliacoes(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findAllByAvaliacoes(id).then((clientes : any) => {
        const clientesList : ICliente[] = []

        for (let cliente of clientes) {
            clientesList.push(clienteObject.JSONToObject(cliente))
        }
    
        return res.status(200).json(clientesList)
    })
}

async function findAllByComerciosFavoritos(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findAllByComerciosFavoritos(id).then((clientes : any) => {
        const clientesList : ICliente[] = []

        for (let cliente of clientes) {
            clientesList.push(clienteObject.JSONToObject(cliente))
        }
    
        return res.status(200).json(clientesList)
    })
}

async function create(req : Request, res : Response) {
    const comercio : any = req.body
    const comercioData : IComercio = comercioObject.objectToJSON(comercio)

    dao.create(comercioData).then((comercio : any) => {
        if (comercio === null){
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
    const comercio : any = req.body
    const comercioData : IComercio = comercioObject.objectToJSON(comercio)

    dao.update(id, comercioData).then((comercio : any) => {
        let comercioRegister : string = ""

        if (comercio !== null) {
            comercioRegister = comercio.toString()
        }
    
        if (comercio === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (comercioRegister === '0'){
            return res.status(404).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (comercioRegister === '1'){
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
            res.status(404).json({
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
    findAllByProdutos,
    findAllByPromocoes,
    findAllByAvaliacoes,
    findAllByComerciosFavoritos,
    create,
    update,
    destroy
}