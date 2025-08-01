import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const tipoProdutos : sequelize.ModelStatic<Model> = databaseModels["tipoProdutos"]



async function findOne(idTipoProduto : number) {
    return await tipoProdutos.findOne({
        where: {
            id_tipo_produto : idTipoProduto
        },
        logging: false
    })
}

async function findAll() {
    return await tipoProdutos.findAll({
        logging: false
    })
}

async function create(tipoProduto : any) {
    try {
        return await tipoProdutos.create(tipoProduto, {
            logging: false
        })
    } catch (err) {
        return null
    }
}

async function update(idTipoProduto : number, tipoProduto : any) {
    try {
        return await tipoProdutos.update(tipoProduto, {
            where: {
                id_tipo_produto : idTipoProduto
            },
            logging: false
        })
    } catch (err) {
        return null
    }
}

async function destroy(idTipoProduto : number) {
    return await tipoProdutos.destroy({
        where: {
            id_tipo_produto : idTipoProduto
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