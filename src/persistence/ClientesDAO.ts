import type sequelize from "sequelize"
import { databaseModels } from "../model/Connection.js"
import type { Model } from "sequelize"



const usuarios : sequelize.ModelStatic<Model> = databaseModels["usuarios"]
const clientes : sequelize.ModelStatic<Model> = databaseModels["clientes"]
const comercios : sequelize.ModelStatic<Model> = databaseModels["comercios"]
const tipoProdutos : sequelize.ModelStatic<Model> = databaseModels["tipoProdutos"]
const chamados : sequelize.ModelStatic<Model> = databaseModels["chamados"]
const avaliacoes : sequelize.ModelStatic<Model> = databaseModels["avaliacoes"]
const comerciosFavoritos : sequelize.ModelStatic<Model> = databaseModels["comerciosFavoritos"]
const produtosFavoritos : sequelize.ModelStatic<Model> = databaseModels["produtosFavoritos"]



async function findOne(idUsuario : number) {
    const usuario = await usuarios.findOne({
        where : {
            id_usuario : idUsuario
        },
        logging: false,
        raw: true
    })

    const cliente = await clientes.findOne({
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

    await clientes.findAll({
        logging: false,
        raw: true
    }).then(async (clientesList : any) => {
        for (let cliente of clientesList) {
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

async function findAllByAvaliacoes(idUsuario : number) {
    const comerciosList : any[] = []

    await avaliacoes.findAll({
        where: {
            id_usuario: idUsuario
        },
        logging: false,
        raw: true
    }).then(async (avaliacoesList : any) => {
        for (let avaliacao of avaliacoesList) {
            await comercios.findOne({
                where : {
                    id_comrc : avaliacao["id_comrc"]
                },
                logging: false,
                raw: true
            }).then((comercio: any) => {
                comerciosList.push(comercio)
            })
        }
    })

    return comerciosList
}

async function findAllByComerciosFavoritos(idUsuario : number) {
    const comerciosList : any[] = []

    await comerciosFavoritos.findAll({
        where: {
            id_usuario: idUsuario
        },
        logging: false,
        raw: true
    }).then(async (comerciosFavoritosList : any) => {
        for (let comercioFavorito of comerciosFavoritosList) {
            await comercios.findOne({
                where : {
                    id_comrc : comercioFavorito["id_comrc"]
                },
                logging: false,
                raw: true
            }).then((comercio: any) => {
                comerciosList.push(comercio)
            })
        }
    })

    return comerciosList
}

async function findAllByProdutosFavoritos(idUsuario : number) {
    const tipoProdutosList : any[] = []

    await produtosFavoritos.findAll({
        where: {
            id_usuario: idUsuario
        },
        logging: false,
        raw: true
    }).then(async (produtosFavoritosList : any) => {
        for (let produtoFavorito of produtosFavoritosList) {
            await tipoProdutos.findOne({
                where : {
                    id_tipo_produto : produtoFavorito["id_tipo_produto"]
                },
                logging: false,
                raw: true
            }).then((tipoProduto: any) => {
                tipoProdutosList.push(tipoProduto)
            })
        }
    })

    return tipoProdutosList
}

async function create(cliente : any) {
    try {
        const usuarioRegister = await usuarios.create(cliente[0], {
            logging: false,
            raw: true
        })
        const clienteRegister = await clientes.create(cliente[1], {
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

async function createAvaliacao(idUsuario : number, idComercio : number, avaliacao : any) {
    try {
        const cliente = await clientes.findOne({
            where: {
                id_usuario : idUsuario
            },
            logging: false,
            raw: true
        })

        const comercio = await comercios.findOne({
            where: {
                id_comrc : idComercio
            },
            raw: true
        })

        if (!cliente || !comercio) {
            return null
        }

        return await avaliacoes.create(avaliacao, {
            logging: false,
            raw: true
        })
        
    } catch (err) {
        return null
    }
}

async function createComercioFavorito(idUsuario : number, idComercio : number, comercioFavorito : any) {
    try {
        const cliente = await clientes.findOne({
            where: {
                id_usuario : idUsuario
            },
            logging: false,
            raw: true
        })

        const comercio = await comercios.findOne({
            where: {
                id_comrc : idComercio
            },
            logging: false,
            raw: true
        })

        if (!cliente || !comercio) {
            return null
        }

        return await comerciosFavoritos.create(comercioFavorito, {
            logging: false,
            raw: true
        })
    } catch (err) {
        return null
    }
}

async function createProdutoFavorito(idUsuario : number, idTipoProduto : number, produtoFavorito : any) {
    try {
        const cliente = await clientes.findOne({
            where: {
                id_usuario : idUsuario
            },
            logging: false,
            raw: true
        })

        const tipoProduto = await tipoProdutos.findOne({
            where: {
                id_tipo_produto : idTipoProduto
            },
            logging: false,
            raw: true
        })

        if (!cliente || !tipoProduto) {
            return null
        }

        return await produtosFavoritos.create(produtoFavorito, {
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
        const clienteRegister = await clientes.update(cliente[1], {
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
    findAllByAvaliacoes,
    findAllByComerciosFavoritos,
    findAllByProdutosFavoritos,
    create,
    createAvaliacao,
    createComercioFavorito,
    createProdutoFavorito,
    update,
    destroy
}