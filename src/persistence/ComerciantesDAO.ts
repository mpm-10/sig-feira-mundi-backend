import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const comerciantes : sequelize.ModelStatic<Model> = databaseModels["comerciantes"]



async function findOne(idComerciante : number) {
    return await comerciantes.findOne({
        where : {
            id_comerciante : idComerciante
        }
    })
}

async function findAll() {
    return await comerciantes.findAll()
}

async function create(comerciante : any) {
    try {
        return await comerciantes.create(comerciante)
    } catch (err) {
        return null
    }
}

async function update(idComerciante : number, comerciante : any) {
    try {
        return await comerciantes.update(comerciante, {
            where: {
                id_comerciante : idComerciante
            }
        })
    } catch (err) {
        return null
    }
}

async function destroy(idComerciante : number) {
    return await comerciantes.destroy({
        where: {
            id_comerciante : idComerciante
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