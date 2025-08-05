import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const usuarios : sequelize.ModelStatic<Model> = databaseModels["usuarios"]
const administradores : sequelize.ModelStatic<Model> = databaseModels["administradores"]
const chamados : sequelize.ModelStatic<Model> = databaseModels["chamados"]
const resolucaoChamados : sequelize.ModelStatic<Model> = databaseModels["resolucaoChamados"]



async function findOne(idUsuario : number) {
    const usuario = await usuarios.findOne({
        where : {
            id_usuario : idUsuario
        },
        logging: false,
        raw: true
    })

    const cliente = await administradores.findOne({
        where : {
            id_usuario : idUsuario
        },
        logging: false,
        raw: true
    })

    if (!usuario || !cliente) {
        return null
    }

    return [usuario, cliente]
}

async function findAll() {
    const usuariosList : any[] = []

    await administradores.findAll({
        logging: false,
        raw: true
    }).then(async (administradoresList : any) => {
        for (let cliente of administradoresList) {
            await usuarios.findOne({
                where : {
                    id_usuario : cliente["id_usuario"]
                },
                logging: false,
                raw: true
            }).then((usuario : any) => {
                usuariosList.push([ usuario, cliente ])
            })
        }
    })

    return usuariosList
}

async function findAllByChamados(idUsuario : number) {
    return await chamados.findAll({
        where: {
            id_usuario: idUsuario
        },
        logging: false,
        raw: true
    })
}

async function findAllByResolucaoChamados(idUsuario : number) {
    const chamadosList : any[] = []

    await resolucaoChamados.findAll({
        where: {
            id_usuario: idUsuario
        },
        logging: false,
        raw: true
    }).then(async (chamadoList : any) => {
        for (let chamado of chamadoList) {
            await usuarios.findOne({
                where : {
                    id_chamado : chamado["id_chamado"]
                },
                logging: false,
                raw: true
            }).then((chamado : any) => {
                chamadosList.push(chamado)
            })
        }
    })

    return chamadosList
}

async function create(cliente : any) {
    try {
        const usuarioRegister = await usuarios.create(cliente[0], {
            logging: false,
            raw: true
        })
        const clienteRegister = await administradores.create(cliente[1], {
            logging: false,
            raw: true
        })

        if (!usuarioRegister || !clienteRegister) {
            return null
        }

        return [ usuarioRegister, clienteRegister ]
    } catch (err) {
        return null
    }
}

async function createResolucaoChamado(idChamado : number, idAdministrador : number, resolucaoChamado : any) {
    try {
        const chamado = await chamados.findOne({
            where: {
                id_chamado : idChamado
            },
            logging: false,
            raw: true
        })
    
        const administrador = await administradores.findOne({
            where: {
                id_usuario : idAdministrador
            },
            logging: false,
            raw: true
        })
    
        if (!chamado || !administrador) {
            return null
        }
        
        return await resolucaoChamados.create(resolucaoChamado, {
            logging: false,
            raw: true
        })
    } catch (err) {
        return null
    }
}

async function update(idUsuario : number, cliente : any) {
    try {
        const usuarioRegister = await usuarios.update(cliente[0], {
            where: {
                id_usuario : idUsuario
            },
            logging: false
        })
        const clienteRegister = await administradores.update(cliente[1], {
            where: {
                id_usuario : idUsuario
            },
            logging: false
        })

        if (!usuarioRegister || !clienteRegister) {
            return null
        }
        
        return [ usuarioRegister, clienteRegister ]
    } catch (err) {
        return null
    }
}

async function destroy(idUsuario : number) {
    return await usuarios.destroy({
        where: {
            id_usuario : idUsuario
        },
        logging: false,
        cascade: true
    })
}



export {
    findOne,
    findAll,
    findAllByChamados,
    findAllByResolucaoChamados,
    create,
    createResolucaoChamado,
    update,
    destroy
}