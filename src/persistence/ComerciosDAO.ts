import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const usuarios : sequelize.ModelStatic<Model> = databaseModels["usuarios"]
const clientes : sequelize.ModelStatic<Model> = databaseModels["clientes"]
const comercios : sequelize.ModelStatic<Model> = databaseModels["comercios"]
const produtos : sequelize.ModelStatic<Model> = databaseModels["produtos"]
const promocoes : sequelize.ModelStatic<Model> = databaseModels["promocoes"]
const avaliacoes : sequelize.ModelStatic<Model> = databaseModels["avaliacoes"]
const comerciosFavoritos : sequelize.ModelStatic<Model> = databaseModels["comerciosFavoritos"]



async function findOne(idComercio : number) {
    return await comercios.findOne({
        where : {
            id_comrc : idComercio
        },
        logging: false,
        raw: true
    })
}

async function findAll() {
    return await comercios.findAll({
        logging: false,
        raw: true
    })
}

async function findAllByPromocoes(idComercio : number) {
    return await promocoes.findAll({
        where: {
            id_comrc: idComercio
        },
        logging: false,
        raw: true
    })
}

async function findAllByProdutos(idComercio : number) {
    return await produtos.findAll({
        where: {
            id_comrc: idComercio
        },
        logging: false,
        raw: true
    })
}

async function findAllByAvaliacoes(idComercio : number) {
    const clientesList : any[] = []
    let usuarioRegister : any = {}
    let clienteRegister : any = {}

    await avaliacoes.findAll({
        where: {
            id_comrc: idComercio
        },
        logging: false,
        raw: true
    }).then(async (clienteList : any) => {
        for (let avaliacaoCliente of clienteList) {
            const usuario = await usuarios.findOne({
                where : {
                    id_usuario : avaliacaoCliente["id_usuario"]
                },
                logging: false,
                raw: true
            })
            const cliente = await clientes.findOne({
                where : {
                    id_usuario : avaliacaoCliente["id_usuario"]
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

async function findAllByComerciosFavoritos(idComercio : number) {
    const clientesList : any[] = []
    let usuarioRegister : any = {}
    let clienteRegister : any = {}

    await comerciosFavoritos.findAll({
        where: {
            id_comrc: idComercio
        },
        logging: false,
        raw: true
    }).then(async (clienteList : any) => {
        for (let comercioFavoritoCliente of clienteList) {
            const usuario = await usuarios.findOne({
                where : {
                    id_usuario : comercioFavoritoCliente["id_usuario"]
                },
                logging: false,
                raw: true
            })
            const cliente = await clientes.findOne({
                where : {
                    id_usuario : comercioFavoritoCliente["id_usuario"]
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

async function create(comercio : any) {
    try {
        return await comercios.create(comercio, {
            logging: false,
            raw: true
        })
    } catch (err) {
        return null
    }
}

async function update(idComercio : number, comercio : any) {
    try {
        return await comercios.update(comercio, {
            where: {
                id_comrc : idComercio
            },
            logging: false
        })
    } catch (err) {
        return null
    }
}

async function destroy(idComercio : number) {
    return await comercios.destroy({
        where: {
            id_comrc : idComercio
        },
        logging: false,
        cascade: true
    })
}



export {
    findOne,
    findAll,
    findAllByProdutos,
    findAllByPromocoes,
    findAllByAvaliacoes,
    findAllByComerciosFavoritos,
    create,
    update,
    destroy
}