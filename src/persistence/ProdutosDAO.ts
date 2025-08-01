import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const produtos : sequelize.ModelStatic<Model> = databaseModels["produtos"]



async function findOne(idProduto : number) {
    return await produtos.findOne({
        where : {
            id_produto : idProduto
        }
    })
}

async function findAll() {
    return await produtos.findAll()
}

async function create(produto : any) {
    try {
        return await produtos.create(produto)
    } catch (err) {
        return null
    }
}

async function update(idProduto : number, produto : any) {
    try {
        return await produtos.update(produto, {
            where: {
                id_produto : idProduto
            }
        })
    } catch (err) {
        return null
    }
}

async function destroy(idProduto : number) {
    return await produtos.destroy({
        where: {
            id_produto : idProduto
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