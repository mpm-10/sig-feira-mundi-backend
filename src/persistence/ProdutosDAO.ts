import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const produtos : sequelize.ModelStatic<Model> = databaseModels["produtos"]
const promocoes : sequelize.ModelStatic<Model> = databaseModels["promocoes"]



async function findOne(idProduto : number) {
    return await produtos.findOne({
        where : {
            id_produto : idProduto
        },
        logging: false,
        raw: true
    })
}

async function findAll() {
    return await produtos.findAll({
        logging: false,
        raw: true
    })
}

async function findAllByComercio(idProduto : number) {
    return await promocoes.findAll({
        where: {
            id_produto: idProduto
        },
        logging: false,
        raw: true
    })
}

async function findAllByPromocoes(idProduto : number) {
    return await promocoes.findAll({
        where: {
            id_produto: idProduto
        },
        logging: false,
        raw: true
    })
}

async function create(produto : any) {
    try {
        return await produtos.create(produto, {
            logging: false,
            raw: true
        })
    } catch (err) {
        return null
    }
}

async function update(idProduto : number, produto : any) {
    try {
        return await produtos.update(produto, {
            where: {
                id_produto : idProduto
            },
            logging: false
        })
    } catch (err) {
        return null
    }
}

async function destroy(idProduto : number) {
    return await produtos.destroy({
        where: {
            id_produto : idProduto
        },
        logging: false,
        cascade: true
    })
}



export {
    findOne,
    findAll,
    findAllByComercio,
    findAllByPromocoes,
    create,
    update,
    destroy
}