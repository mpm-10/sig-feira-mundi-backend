import type { Request, Response } from "express"
import * as dao from "../persistence/PromocoesDAO.js"
import type { IPromocao } from "../object/interface/IPromocao.js"
import * as promocaoObject from "../object/function/Promocao.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((usuario : any) => {
        if (usuario === null){
            return res.status(404).json({
                "message" : "Usuário Inexistente"
            })
        }

        return res.status(200).json(promocaoObject.JSONToObject(usuario))
    })
}

async function findAll(req : Request, res : Response) {
    dao.findAll().then((promocoes : any) => {
        const promocoesList : IPromocao[] = []

        for (let promocao of promocoes) {
            promocoesList.push(promocaoObject.JSONToObject(promocao))
        }
    
        return res.status(200).json(promocoesList)
    })
}

async function create(req : Request, res : Response) {
    const promocao : any = req.body
    const promocaoData : IPromocao = promocaoObject.objectToJSON(promocao)

    dao.create(promocaoData).then((promocao : any) => {
        if (promocao === null){
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
    const promocao : any = req.body
    const promocaoData : IPromocao = promocaoObject.objectToJSON(promocao)

    dao.update(id, promocaoData).then((promocao : any) => {
        let promocaoRegister : string = promocao.toString()

        if (promocao !== null) {
            promocaoRegister = promocao.toString()
        }
    
        if (promocaoRegister === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (promocaoRegister === '0'){
            return res.status(404).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (promocaoRegister === '1'){
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
            res.status(404).json({
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