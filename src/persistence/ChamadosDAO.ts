import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const usuarios : sequelize.ModelStatic<Model> = databaseModels["usuarios"]
const administradores : sequelize.ModelStatic<Model> = databaseModels["administradores"]
const chamados : sequelize.ModelStatic<Model> = databaseModels["chamados"]
const resolucaoChamados : sequelize.ModelStatic<Model> = databaseModels["resolucaoChamados"]



async function findOne(idChamado : number) {
    return await chamados.findOne({
        where : {
            id_chamado : idChamado
        },
        logging: false,
        raw: true
    })
}

async function findAll() {
    return await chamados.findAll({
        logging: false,
        raw: true
    })
}

async function findAllByResolucaoChamados(idChamado : number) {
    const administradoresList : any[] = []
    let usuarioRegister : any = {}
    let administradorRegister : any = {}
        
    await resolucaoChamados.findAll({
        where: {
            id_chamado: idChamado
        },
        logging: false,
        raw: true
    }).then(async (administradorList : any) => {
        for (let resolucaoChamadoAdministrador of administradorList) {
            const usuario = await usuarios.findOne({
                where : {
                    id_usuario : resolucaoChamadoAdministrador["id_usuario"]
                },
                logging: false,
                raw: true
            })
            const administrador = await administradores.findOne({
                where : {
                    id_usuario : resolucaoChamadoAdministrador["id_usuario"]
                },
                logging: false,
                raw: true
            })
        
            if (!usuario && !administrador) {
                return null
            }
        
            usuarioRegister = usuario;
            administradorRegister = administrador;
        
            administradoresList.push([usuarioRegister, administradorRegister])
        }
    })
        
    return administradoresList
}

async function create(chamado : any) {
    try {
        return await chamados.create(chamado, {
            logging: false,
            raw: true
        })
    } catch (err) {
        return null
    }
}

async function update(idChamado : number, chamado : any) {
    try {
        return await chamados.update(chamado, {
            where: {
                id_chamado : idChamado
            },
            logging: false
        })
    } catch (err) {
        return null
    }
}

async function destroy(idChamado : number) {
    return await chamados.destroy({
        where: {
            id_chamado : idChamado
        },
        logging: false,
        cascade: true
    })
}



export {
    findOne,
    findAll,
    findAllByResolucaoChamados,
    create,
    update,
    destroy
}