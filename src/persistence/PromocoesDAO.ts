import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const promocoes : sequelize.ModelStatic<Model> = databaseModels["promocoes"]



async function findOne(idPromocao : number) {
    return await promocoes.findOne({
        where : {
            id_promocao : idPromocao
        }
    })
}

async function findAll() {
    return await promocoes.findAll()
}

async function create(promocao : any) {
    try {
        return await promocoes.create(promocao)
    } catch (err) {
        return null
    }
}

async function update(idPromocao : number, promocao : any) {
    try {
        return await promocoes.update(promocao, {
            where: {
                id_promocao : idPromocao
            }
        })
    } catch (err) {
        return null
    }
}

async function destroy(idPromocao : number) {
    return await promocoes.destroy({
        where: {
            id_promocao : idPromocao
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