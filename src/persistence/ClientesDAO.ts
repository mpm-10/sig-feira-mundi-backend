import type sequelize from "sequelize"
import { databaseModels } from "../model/Connection.js"
import type { Model } from "sequelize"



const clientes : sequelize.ModelStatic<Model> = databaseModels["clientes"]



async function findOne(idCliente : number) {
    return await clientes.findOne({
        where : {
            id_cliente : idCliente
        },
        logging: false
    })
}

async function findAll() {
    return await clientes.findAll({
        logging: false
    })
}

async function create(cliente : any) {
    try {
        return await clientes.create(cliente, {
            logging: false
        })
    } catch (err) {
        return null
    }
}

async function update(idCliente : number, cliente : any) {
    try {
        return await clientes.update(cliente, {
            where: {
                id_cliente : idCliente
            },
            logging: false
        })
    } catch (err) {
        return null
    }
}

async function destroy(idCliente : number) {
    return await clientes.destroy({
        where: {
            id_cliente : idCliente
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