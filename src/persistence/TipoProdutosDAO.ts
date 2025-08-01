import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const tipoProdutos : sequelize.ModelStatic<Model> = databaseModels["tipoProdutos"]



async function findOne(idTipoProduto : number) {
    return await tipoProdutos.findOne({
        where : {
            id_tipo_produto : idTipoProduto
        }
    })
}

async function findAll() {
    return await tipoProdutos.findAll()
}

async function create(tipoProduto : any) {
    try {
        return await tipoProdutos.create(tipoProduto)
    } catch (err) {
        return null
    }
}

async function update(idTipoProduto : number, tipoProduto : any) {
    try {
        return await tipoProdutos.update(tipoProduto, {
            where: {
                id_tipo_produto : idTipoProduto
            }
        })
    } catch (err) {
        return null
    }
}

async function destroy(idTipoProduto : number) {
    return await tipoProdutos.destroy({
        where: {
            id_tipo_produto : idTipoProduto
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