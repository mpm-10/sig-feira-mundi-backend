import type { Request, Response } from "express"
import * as dao from "../persistence/AdministradoresDAO.js"
import type { IAdministrador } from "../object/interface/IAdministrador.js"
import type { IChamado } from "../object/interface/IChamado.js"
import type { IResolucaoChamado } from "../object/interface/IResolucaoChamado.js"
import * as administradorObject from "../object/function/Administrador.js"
import * as chamadoObject from "../object/function/Chamado.js"
import * as resolucaoChamadoObject from "../object/function/ResolucaoChamado.js"



async function findOne(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findOne(id).then((usuario : any) => {
        if (usuario === null){
            return res.status(404).json({
                "message" : "Usuário Inexistente"
            })
        }

        return res.status(200).json(administradorObject.JSONToObject(usuario))
    })
}

async function findAll(req : Request, res : Response) {
    dao.findAll().then((administradores : any) => {
        const administradoresList : IAdministrador[] = []

        for (let administrador of administradores) {
            administradoresList.push(administradorObject.JSONToObject(administrador))
        }
    
        return res.status(200).json(administradoresList)
    })
}

async function findAllByChamados(req : Request, res : Response) {
    const id : number = Number(req.params.id)

    dao.findAllByChamados(id).then((chamado : any) => {
        const chamadoList : IChamado[] = []

        for (let administrador of chamado) {
            chamadoList.push(chamadoObject.JSONToObject(administrador))
        }
    
        return res.status(200).json(chamadoList)
    })
}

async function findAllByResolucaoChamados(req : Request, res : Response) {
    const id : number = Number(req.params.id)
    
    dao.findAllByResolucaoChamados(id).then((resolucaoChamados : any) => {
        const resolucaoChamadoList : IResolucaoChamado[] = []

        for (let resolucaoChamado of resolucaoChamados) {
            resolucaoChamadoList.push(resolucaoChamadoObject.JSONToObject(resolucaoChamado))
        }
    
        return res.status(200).json(resolucaoChamadoList)
    })
}

async function create(req : Request, res : Response) {
    const administrador : any = req.body
    const administradorData : IAdministrador[] = administradorObject.objectToJSON(administrador)

    dao.create(administradorData).then((administrador : any) => {
        if (administrador === null){
            return res.status(400).json({
                "message" : "Criação de Registro Não Aceita"
            })
        }
        return res.status(200).json({
            "message" : "Registro de Usuário Realizado"
        })
    })
}

async function createResolucaoChamado(req : Request, res : Response) {
    const idUsuario : number = Number(req.params.idUsuario)
    const idChamado : number = Number(req.params.idComercio)
    const usuario : any = req.body
    const usuarioData : IAdministrador[] = administradorObject.objectToJSON(usuario)

    dao.createResolucaoChamado(idUsuario, idChamado, usuarioData).then((usuario : any) => {
        if (usuario === null){
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
    const administrador : any = req.body
    const administradorData : IAdministrador[] = administradorObject.objectToJSON(administrador)

    dao.update(id, administradorData).then((administrador : any) => {
        let administradorRegister : string = ""

        if (administrador !== null) {
            administradorRegister = administrador.toString()
        }
    
        if (administrador === null){
            return res.status(400).json({
                "message" : "Alteração de Registro Não Aceita"
            })
        }
        else if (administradorRegister === '1,1'){
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

    dao.destroy(id).then((administrador : any) => {
        if (administrador === 0){
            res.status(404).json({
                "message" : "Registro Inexistente"
            })
        }
        else if (administrador === 1){
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
    findAllByResolucaoChamados,
    create,
    createResolucaoChamado,
    update,
    destroy
}