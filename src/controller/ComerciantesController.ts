import type { Request, Response } from "express"
import * as dao from "../persistence/ComerciantesDAO.js"
import type { IComerciante } from "../object/interface/IComerciante.js"
import type { IChamado } from "../object/interface/IChamado.js"
import type { IComercio } from "../object/interface/IComercio.js"
import * as comercianteObject from "../object/function/Comerciante.js"
import * as chamadoObject from "../object/function/Chamado.js"
import * as comercioObject from "../object/function/Comercio.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((usuario : any) => {
        if (usuario === null){
            return res.status(404).json({
                "message" : "Usuário Inexistente"
            })
        }

        return res.status(200).json(comercianteObject.JSONToObject(usuario))
    })
}

async function findAll(req : Request, res : Response) {
    dao.findAll().then((comerciantes : any) => {
        const comerciantesList : IComerciante[] = []

        for (let comerciante of comerciantes) {
            comerciantesList.push(comercianteObject.JSONToObject(comerciante))
        }
    
        return res.status(200).json(comerciantesList)
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

async function findAllByComercios(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findAllByComercios(id).then((comercios : any) => {
        const comerciosList : IComercio[] = []

        for (let comercio of comercios) {
            comerciosList.push(comercioObject.JSONToObject(comercio))
        }
    
        return res.status(200).json(comerciosList)
    })
}

async function create(req : Request, res : Response) {
    const comerciante : any = req.body
    const comercianteData : IComerciante[] = comercianteObject.objectToJSON(comerciante)

    dao.create(comercianteData).then((comerciante : any) => {
        if (comerciante === null){
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
    const comerciante : any = req.body
    const comercianteData : IComerciante[] = comercianteObject.objectToJSON(comerciante)

    dao.update(id, comercianteData).then((comerciante : any) => {
        let comercianteRegister : string = ""

        if (comerciante !== null) {
            comercianteRegister = comerciante.toString()
        }
    
        if (comerciante === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (comercianteRegister === '1,1'){
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

    dao.destroy(id).then((comerciante : any) => {
        if (comerciante === 0){
            res.status(404).json({
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
    findAllByChamados,
    findAllByComercios,
    create,
    update,
    destroy
}