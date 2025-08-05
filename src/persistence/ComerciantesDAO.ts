import type sequelize from "sequelize"
import type { Model } from "sequelize"
import { databaseModels } from "../model/Connection.js"



const usuarios : sequelize.ModelStatic<Model> = databaseModels["usuarios"]
const comerciantes : sequelize.ModelStatic<Model> = databaseModels["comerciantes"]
const comercios : sequelize.ModelStatic<Model> = databaseModels["comercios"]
const chamados : sequelize.ModelStatic<Model> = databaseModels["chamados"]



async function findOne(idUsuario : number) {
    const usuario = await usuarios.findOne({
        where : {
            id_usuario : idUsuario
        },
        logging: false,
        raw: true
    })

    const comerciante = await comerciantes.findOne({
        where : {
            id_usuario : idUsuario
        },
        logging: false,
        raw: true
    })

    if (!usuario || !comerciante) {
        return null
    }

    return [usuario, comerciante]
}

async function findAll() {
    const usuariosList : any[] = []

    await comerciantes.findAll({
        logging: false,
        raw: true
    }).then(async (comerciantesList : any) => {
        for (let comerciante of comerciantesList) {
            await usuarios.findOne({
                where : {
                    id_usuario : comerciante["id_usuario"]
                },
                logging: false,
                raw: true
            }).then((usuario : any) => {
                usuariosList.push([ usuario, comerciante ])
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

async function findAllByComercios(idUsuario : number) {
    return await comercios.findAll({
        where: {
            id_usuario: idUsuario
        },
        logging: false,
        raw: true
    })
}

async function create(comerciante : any) {
    try {
        const usuarioRegister = await usuarios.create(comerciante[0], {
            logging: false,
            raw: true
        })
        const comercianteRegister = await comerciantes.create(comerciante[1], {
            logging: false,
            raw: true
        })

        if (!usuarioRegister || !comercianteRegister) {
            return null
        }

        return [ usuarioRegister, comercianteRegister ]
    } catch (err) {
        return null
    }
}

async function update(idUsuario : number, comerciante : any) {
    try {
        const usuarioRegister = await usuarios.update(comerciante[0], {
            where: {
                "id_usuario" : idUsuario
            },
            logging: false
        })
        const comercianteRegister = await comerciantes.update(comerciante[1], {
            where: {
                "id_usuario" : idUsuario
            },
            logging: false
        })

        if (!usuarioRegister || !comercianteRegister) {
            return null
        }
        
        return [ usuarioRegister, comercianteRegister ]
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
    findAllByComercios,
    findAllByChamados,
    create,
    update,
    destroy
}