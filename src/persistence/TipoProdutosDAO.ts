import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const usuarios : sequelize.ModelStatic<Model> = databaseModels["usuarios"]
const clientes : sequelize.ModelStatic<Model> = databaseModels["clientes"]
const tipoProdutos : sequelize.ModelStatic<Model> = databaseModels["tipoProdutos"]
const produtos : sequelize.ModelStatic<Model> = databaseModels["produtos"]
const produtosFavoritos : sequelize.ModelStatic<Model> = databaseModels["produtosFavoritos"]



async function findOne(idTipoProduto : number) {
    return await tipoProdutos.findOne({
        where : {
            id_tipo_produto : idTipoProduto
        },
        logging: false,
        raw: true
    })
}

async function findAll() {
    return await tipoProdutos.findAll({
        logging: false,
        raw: true
    })
}

async function findAllByProdutos(idTipoProduto : number) {
    return await produtos.findAll({
        where: {
            id_tipo_produto: idTipoProduto
        },
        logging: false,
        raw: true
    })
}

async function findAllByProdutosFavoritos(idTipoProduto : number) {
    const clientesList : any[] = []
    let usuarioRegister : any = {}
    let clienteRegister : any = {}
    
    await produtosFavoritos.findAll({
        where: {
            id_tipo_produto: idTipoProduto
        },
        logging: false,
        raw: true
    }).then(async (clienteList : any) => {
        for (let produtoFavoritoCliente of clienteList) {
            const usuario = await usuarios.findOne({
                where : {
                    id_usuario : produtoFavoritoCliente["id_usuario"]
                },
                logging: false,
                raw: true
            })
            const cliente = await clientes.findOne({
                where : {
                    id_usuario : produtoFavoritoCliente["id_usuario"]
                },
                logging: false,
                raw: true
            })
    
            if (!usuario && !cliente) {
                return null
            }
    
            usuarioRegister = usuario;
            clienteRegister = cliente;
    
            clientesList.push([usuarioRegister, clienteRegister])
        }
    })
    
    return clientesList
}

async function create(tipoproduto : any) {
    try {
        return await tipoProdutos.create(tipoproduto, {
            logging: false,
            raw: true
        })
    } catch (err) {
        return null
    }
}

async function update(idTipoProduto : number, tipoproduto : any) {
    try {
        return await tipoProdutos.update(tipoproduto, {
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
    findAllByProdutos,
    findAllByProdutosFavoritos,
    create,
    update,
    destroy
}