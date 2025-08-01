import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const administradores : sequelize.ModelStatic<Model> = databaseModels["administradores"]



async function findOne(idAdministrador : number) {
    return await administradores.findOne({
        where : {
            id_administrador : idAdministrador
        }
    })
}

async function findAll() {
    return await administradores.findAll()
}

async function create(administrador : any) {
    try {
        return await administradores.create(administrador)
    } catch (err) {
        return null
    }
}

async function update(idAdministrador : number, administrador : any) {
    try {
        return await administradores.update(administrador, {
            where: {
                id_administrador : idAdministrador
            }
        })
    } catch (err) {
        return null
    }
}

async function destroy(idAdministrador : number) {
    return await administradores.destroy({
        where: {
            id_administrador : idAdministrador
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