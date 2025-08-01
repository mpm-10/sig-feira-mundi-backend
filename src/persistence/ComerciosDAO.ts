import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const comercios : sequelize.ModelStatic<Model> = databaseModels["comercios"]



async function findOne(idComercio : number) {
    return await comercios.findOne({
        where: {
            id_comercio : idComercio
        },
        logging: false
    })
}

async function findAll() {
    return await comercios.findAll({
        logging: false
    })
}

async function create(comercio : any) {
    try {
        return await comercios.create(comercio, {
            logging: false
        })
    } catch (err) {
        return null
    }
}

async function update(idComercio : number, comercio : any) {
    try {
        return await comercios.update(comercio, {
            where : {
                id_comercio : idComercio
            },
            logging: false
        })
    } catch (err) {
        return null
    }
}

async function destroy(idComercio : number) {
    return await comercios.destroy({
        where : {
            id_comercio : idComercio
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