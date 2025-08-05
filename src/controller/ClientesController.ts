import type { Request, Response } from "express"
import * as dao from "../persistence/ClientesDAO.js"
import type { ICliente } from "../object/interface/ICliente.js"
import type { IChamado } from "../object/interface/IChamado.js"
import type { IAvaliacao } from "../object/interface/IAvaliacao.js"
import type { IComercioFavorito } from "../object/interface/IComercioFavorito.js"
import type { IProdutoFavorito } from "../object/interface/IProdutoFavorito.js"
import type { IComercio } from "../object/interface/IComercio.js"
import type { ITipoProduto } from "../object/interface/ITipoProduto.js"
import * as clienteObject from "../object/function/Cliente.js"
import * as chamadoObject from "../object/function/Chamado.js"
import * as avaliacaoObject from "../object/function/Avaliacao.js"
import * as comercioFavoritoObject from "../object/function/ComercioFavorito.js"
import * as produtoFavoritoObject from "../object/function/ProdutoFavorito.js"
import * as comercioObject from "../object/function/Comercio.js"
import * as tipoProdutosObject from "../object/function/TipoProduto.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((usuario : any) => {
        if (usuario === null){
            return res.status(404).json({
                "message" : "Usuário Inexistente"
            })
        }

        return res.status(200).json(clienteObject.JSONToObject(usuario))
    })
}

async function findAll(req : Request, res : Response) {
    dao.findAll().then((clientes : any) => {
        const clientesList : ICliente[] = []

        for (let cliente of clientes) {
            clientesList.push(clienteObject.JSONToObject(cliente))
        }
    
        return res.status(200).json(clientesList)
    })
}

async function findAllByChamados(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findAllByChamados(id).then((chamados : any) => {
        const chamadosList : IChamado[] = []

        for (let chamado of chamados) {
            chamadosList.push(chamadoObject.JSONToObject(chamado))
        }
    
        return res.status(200).json(chamadosList)
    })
}

async function findAllByAvaliacoes(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findAllByAvaliacoes(id).then((avaliacoes : any) => {
        const avaliacoesList : IComercio[] = []

        for (let avaliacao of avaliacoes) {
            avaliacoesList.push(comercioObject.JSONToObject(avaliacao))
        }
    
        return res.status(200).json(avaliacoesList)
    })
}

async function findAllByComerciosFavoritos(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findAllByComerciosFavoritos(id).then((comercios : any) => {
        const comercioList : IComercio[] = []

        for (let comercio of comercios) {
            comercioList.push(comercioObject.JSONToObject(comercio))
        }
    
        return res.status(200).json(comercioList)
    })
}

async function findAllByProdutosFavoritos(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findAllByProdutosFavoritos(id).then((tipoProdutos : any) => {
        const tipoProdutosList : ITipoProduto[] = []

        for (let tipoProduto of tipoProdutos) {
            tipoProdutos.push(tipoProdutosObject.JSONToObject(tipoProduto))
        }
    
        return res.status(200).json(tipoProdutosList)
    })
}

async function create(req : Request, res : Response) {
    const cliente : any = req.body
    const clienteData : ICliente[] = clienteObject.objectToJSON(cliente)

    dao.create(clienteData).then((cliente : any) => {
        if (cliente === null){
            return res.status(400).json({
                "message" : "Criação de Registro Não Aceita"
            })
        }
        return res.status(200).json({
            "message" : "Registro de Usuário Realizado"
        })
    })
}

async function createAvaliacao(req : Request, res : Response) {
    const idUsuario : number = Number(req.params.idUsuario)
    const idComercio : number = Number(req.params.idComercio)
    const avaliacao : any = req.body
    const avaliacaoData : IAvaliacao = avaliacaoObject.objectToJSON(avaliacao)

    dao.createAvaliacao(idUsuario, idComercio, avaliacaoData).then((avaliacao : any) => {
        if (avaliacao === null){
            return res.status(400).json({
                "message" : "Criação de Registro Não Aceita"
            })
        }
        return res.status(200).json({
            "message" : "Registro de Usuário Realizado"
        })
    })
}

async function createComercioFavorito(req : Request, res : Response) {
    const idUsuario : number = Number(req.params.idUsuario)
    const idComercio : number = Number(req.params.idComercio)
    const comercioFavorito : any = req.body
    const comercioFavoritoData : IComercioFavorito = comercioFavoritoObject.objectToJSON(comercioFavorito)

    dao.createComercioFavorito(idUsuario, idComercio, comercioFavoritoData).then((comercioFavorito : any) => {
        if (comercioFavorito === null){
            return res.status(400).json({
                "message" : "Criação de Registro Não Aceita"
            })
        }
        return res.status(200).json({
            "message" : "Registro de Usuário Realizado"
        })
    })
}

async function createProdutoFavorito(req : Request, res : Response) {
    const idUsuario : number = Number(req.params.idUsuario)
    const idTipoProduto : number = Number(req.params.idComercio)
    const produtoFavorito : any = req.body
    const produtoFavoritoData : IProdutoFavorito = produtoFavoritoObject.objectToJSON(produtoFavorito)

    dao.createProdutoFavorito(idUsuario, idTipoProduto, produtoFavoritoData).then((produtoFavorito : any) => {
        if (produtoFavorito === null){
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
    const cliente : any = req.body
    const clienteData : ICliente[] = clienteObject.objectToJSON(cliente)

    dao.update(id, clienteData).then((cliente : any) => {
        let clienteRegister : string = ""

        if (cliente !== null) {
            clienteRegister = cliente.toString()
        }
    
        if (cliente === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (clienteRegister === '1,1'){
            return res.status(200).json({
                "message" : "Registro Atualizado"
            })
        }
        else {
            return res.status(404).json({
                "message" : "Registro Inexistente"
            })
        }
    })
}

async function destroy(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.destroy(id).then((cliente : any) => {
        if (cliente === 0){
            res.status(404).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (cliente === 1){
            res.status(200).json({
                "message" : "Registro Apagado"
            })
        }
    })
}



export {
    findOne,
    findAll,
    findAllByChamados,
    findAllByAvaliacoes,
    findAllByComerciosFavoritos,
    findAllByProdutosFavoritos,
    create,
    createAvaliacao,
    createComercioFavorito,
    createProdutoFavorito,
    update,
    destroy
}