import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const chamados : sequelize.ModelStatic<Model> = databaseModels["chamados"]



async function findOne(idChamado : number) {
    return await chamados?.findOne({
        where : {
            id_chamado : idChamado
        }
    })
}

async function findAll() {
    return await chamados?.findAll()
}

async function create(chamado : any) {
    try {
        return await chamados?.create(chamado)
    } catch (err) {
        return null
    }
}

async function update(idChamado : number, chamado : any) {
    try {
        return await chamados?.update(chamado, {
            where: {
                id_chamado : idChamado
            }
        })
    } catch (err) {
        return null
    }
}

async function destroy(idChamado : number) {
    return await chamados?.destroy({
        where: {
            id_chamado : idChamado
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