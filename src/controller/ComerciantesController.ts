import type { Request, Response } from "express"
import * as dao from "../persistence/ComerciantesDAO.js"
import type { IComerciante } from "../object/interface/IComerciante.js"
import { JSONToObject, objectToJSON } from "../object/function/Comerciante.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((comerciante : any) => {
        if (comerciante === null){
            return res.status(400).json({
                "message" : "Usuário Inexistente"
            })
        }
        return res.status(200).json(JSONToObject(comerciante))
    })
}

async function findAll(req : Request, res : Response) {
    let comerciantes : any[] = []

    dao.findAll().then((listComerciantes : any) => {
        comerciantes = listComerciantes
    })

    return res.status(200).json(comerciantes)
}

async function create(req : Request, res : Response) {
    const comerciante : any = req.body
    const comercianteData : IComerciante = objectToJSON(comerciante)

    dao.create(comercianteData).then((comerciante : any) => {
        if (comerciante === null){
            return res.status(400).json({
                "message" : "Criação de Registro Não Aceita"
            })
        }
        return res.status(200).json(comerciante)
    })
}

async function update(req : Request, res : Response) {
    const id : number = Number(req.params.id)
    const comerciante : any = req.body
    const comercianteData : IComerciante = objectToJSON(comerciante)

    dao.update(id, comercianteData).then((comerciante : any) => {
        if (comerciante === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (comerciante.includes(0)){
            return res.status(400).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (comerciante.includes(1)){
            return res.status(200).json({
                "message" : "Registro Atualizado"
            })
        }
    })
}

async function destroy(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.destroy(id).then((comerciante : any) => {
        if (comerciante === 0){
            res.status(400).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (comerciante === 1){
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