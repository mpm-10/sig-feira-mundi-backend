import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const chamados : sequelize.ModelStatic<Model> = databaseModels["chamados"]



async function findOne(idChamado : number) {
    return await chamados?.findOne({
        where: {
            id_chamado : idChamado
        },
        logging: false
    })
}

async function findAll() {
    return await chamados?.findAll({
        logging: false
    })
}

async function create(chamado : any) {
    try {
        return await chamados?.create(chamado, {
            logging: false
        })
    } catch (err) {
        return null
    }
}

async function update(idChamado : number, chamado : any) {
    try {
        return await chamados?.update(chamado, {
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
    return await chamados?.destroy({
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
    create,
    update,
    destroy
}