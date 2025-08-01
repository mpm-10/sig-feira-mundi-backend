import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const administradores : sequelize.ModelStatic<Model> = databaseModels["administradores"]



async function findOne(idAdministrador : number) {
    return await administradores.findOne({
        where: {
            id_administrador : idAdministrador
        },
        logging: false
    })
}

async function findAll() {
    return await administradores.findAll({
        logging: false
    })
}

async function create(administrador : any) {
    try {
        return await administradores.create(administrador, {
            logging: false
        })
    } catch (err) {
        return null
    }
}

async function update(idAdministrador : number, administrador : any) {
    try {
        return await administradores.update(administrador, {
            where: {
                id_administrador : idAdministrador
            },
            logging: false
        })
    } catch (err) {
        return null
    }
}

async function destroy(idAdministrador : number) {
    return await administradores.destroy({
        where: {
            id_administrador : idAdministrador
        },
        logging: false,
        cascade: true
    })
}



export {
    findOne,
    findAll,
    create,
    update,
    destroy
}