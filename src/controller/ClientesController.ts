import type { Request, Response } from "express"
import * as dao from "../persistence/ClientesDAO.js"
import type { ICliente } from "../object/interface/ICliente.js"
import { JSONToObject, objectToJSON } from "../object/function/Cliente.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((cliente : any) => {
        if (cliente === null){
            return res.status(400).json({
                "message" : "Usuário Inexistente"
            })
        }
        return res.status(200).json(JSONToObject(cliente))
    })
}

async function findAll(req : Request, res : Response) {
    let clientes : any[] = []

    dao.findAll().then((listClientes : any) => {
        clientes = listClientes
    })

    return res.status(200).json(clientes)
}

async function create(req : Request, res : Response) {
    const cliente : any = req.body
    const clienteData : ICliente = objectToJSON(cliente)

    dao.create(clienteData).then((cliente : any) => {
        if (cliente === null){
            return res.status(400).json({
                "message" : "Criação de Registro Não Aceita"
            })
        }
        return res.status(200).json(cliente)
    })
}

async function update(req : Request, res : Response) {
    const id : number = Number(req.params.id)
    const cliente : any = req.body
    const clienteData : ICliente = objectToJSON(cliente)

    dao.update(id, clienteData).then((cliente : any) => {
        if (cliente === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (cliente.includes(0)){
            return res.status(400).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (cliente.includes(1)){
            return res.status(200).json({
                "message" : "Registro Atualizado"
            })
        }
    })
}

async function destroy(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.destroy(id).then((cliente : any) => {
        if (cliente === 0){
            res.status(400).json({
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
    create,
    update,
    destroy
}