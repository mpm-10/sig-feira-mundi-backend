import { environmentVariables } from "../io/EnvironmentVariables.js"
import { Sequelize } from "sequelize"
import { UsuariosModel } from "./UsuariosModel.js"
import type { IDatabaseModels } from "./IDatabaseModels.js"
import { ClientesModel } from "./ClientesModel.js"
import { ComerciantesModel } from "./ComerciantesModel.js"
import { AdministradoresModel } from "./AdministradoresModel.js"
import { ComerciosModel } from "./ComerciosModel.js"
import { ProdutosModel } from "./ProdutosModel.js"
import { TipoProdutosModel } from "./TipoProdutosModel.js"
import { PromocoesModel } from "./PromocoesModel.js"
import { AvaliacoesModel } from "./AvaliacoesModel.js"
import { ChamadosModel } from "./ChamadosModel.js"
import { ResolucaoChamadosModel } from "./ResolucaoChamadosModel.js"




const databaseConnection : Sequelize = new Sequelize({
    dialect: "postgres",
    username: environmentVariables["username"],
    password: environmentVariables["password"],
    host: environmentVariables["host"],
    port: environmentVariables["port"],
    database: environmentVariables["database"]
})

const databaseModels : IDatabaseModels = {
    usuarios : UsuariosModel(databaseConnection),
    clientes : ClientesModel(databaseConnection),
    comerciantes : ComerciantesModel(databaseConnection),
    administradores : AdministradoresModel(databaseConnection),
    comercios : ComerciosModel(databaseConnection),
    produtos : ProdutosModel(databaseConnection),
    tipoProdutos : TipoProdutosModel(databaseConnection),
    promocoes : PromocoesModel(databaseConnection),
    avaliacoes : AvaliacoesModel(databaseConnection),
    chamados : ChamadosModel(databaseConnection),
    resolucaoChamados : ResolucaoChamadosModel(databaseConnection)
}



function createModels(){
    databaseModels["usuarios"].hasOne(databaseModels["clientes"], {
        foreignKey: "id_usuario",
        onDelete: "CASCADE"
    })
    databaseModels["clientes"].belongsTo(databaseModels["usuarios"], {
        foreignKey: "id_usuario",
        onDelete: "CASCADE"
    })

    databaseModels["usuarios"].hasOne(databaseModels["comerciantes"], {
        foreignKey: "id_usuario",
        onDelete: "CASCADE"
    })
    databaseModels["comerciantes"].belongsTo(databaseModels["usuarios"], {
        foreignKey: "id_usuario",
        onDelete: "CASCADE"
    })

    databaseModels["usuarios"].hasOne(databaseModels["administradores"], {
        foreignKey: "id_usuario",
        onDelete: "CASCADE"
    })
    databaseModels["administradores"].belongsTo(databaseModels["usuarios"], {
        foreignKey: "id_usuario",
        onDelete: "CASCADE"
    })

    

    databaseModels["comerciantes"].hasMany(databaseModels["comercios"], {
        foreignKey: "id_comerciante",
        onDelete: "CASCADE"
    })
    databaseModels["comercios"].belongsTo(databaseModels["comerciantes"], {
        foreignKey: "id_comerciante",
        onDelete: "CASCADE"
    })

    databaseModels["comercios"].hasMany(databaseModels["promocoes"], {
        foreignKey: "id_comercio",
        onDelete: "CASCADE"
    })
    databaseModels["promocoes"].belongsTo(databaseModels["comercios"], {
        foreignKey: "id_comercio",
        onDelete: "CASCADE"
    })

    databaseModels["comercios"].hasMany(databaseModels["produtos"], {
        foreignKey: "id_produto",
        onDelete: "CASCADE"
    })
    databaseModels["produtos"].belongsTo(databaseModels["comercios"], {
        foreignKey: "id_produto",
        onDelete: "CASCADE"
    })

    databaseModels["promocoes"].hasMany(databaseModels["produtos"], {
        foreignKey: "id_promocao",
        onDelete: "CASCADE"
    })
    databaseModels["produtos"].belongsTo(databaseModels["promocoes"], {
        foreignKey: "id_promocao",
        onDelete: "CASCADE"
    })

    databaseModels["tipoProdutos"].hasMany(databaseModels["produtos"], {
        foreignKey: "id_tipo_produto",
        onDelete: "CASCADE"
    })
    databaseModels["produtos"].belongsTo(databaseModels["tipoProdutos"], {
        foreignKey: "id_tipo_produto",
        onDelete: "CASCADE"
    })

    databaseModels["usuarios"].hasMany(databaseModels["chamados"], {
        foreignKey: "id_usuario",
        onDelete: "CASCADE"
    })
    databaseModels["chamados"].belongsTo(databaseModels["usuarios"], {
        foreignKey: "id_usuario",
        onDelete: "CASCADE"
    })

    

    databaseModels["clientes"].belongsToMany(databaseModels["comercios"], {
        through : databaseModels["avaliacoes"],
        foreignKey: "id_cliente",
        otherKey: "id_comercio",
        onDelete: "CASCADE"
    })
    databaseModels["comercios"].belongsToMany(databaseModels["clientes"], {
        through : databaseModels["avaliacoes"],
        foreignKey: "id_comercio",
        otherKey: "id_cliente",
        onDelete: "CASCADE"
    })

    databaseModels["clientes"].belongsToMany(databaseModels["comercios"], {
        through : "comercios_favoritos",
        foreignKey: "id_cliente",
        otherKey: "id_comercio",
        onDelete: "CASCADE"
    })
    databaseModels["comercios"].belongsToMany(databaseModels["clientes"], {
        through : "comercios_favoritos",
        foreignKey: "id_comercio",
        otherKey: "id_cliente",
        onDelete: "CASCADE"
    })

    databaseModels["clientes"].belongsToMany(databaseModels["tipoProdutos"], {
        through : "produtos_favoritos",
        foreignKey: "id_cliente",
        otherKey: "id_tipo_produto",
        onDelete: "CASCADE"
    })
    databaseModels["tipoProdutos"].belongsToMany(databaseModels["clientes"], {
        through : "produtos_favoritos",
        foreignKey: "id_tipo_produto",
        otherKey: "id_cliente",
        onDelete: "CASCADE"
    })

    databaseModels["chamados"].belongsToMany(databaseModels["administradores"], {
        through : databaseModels["resolucaoChamados"],
        foreignKey: "id_chamado",
        otherKey: "id_administrador",
        onDelete: "CASCADE"
    })
    databaseModels["administradores"].belongsToMany(databaseModels["chamados"], {
        through : databaseModels["resolucaoChamados"],
        foreignKey: "id_administrador",
        otherKey: "id_chamado",
        onDelete: "CASCADE"
    })
}

async function startConnection(){
    try {
        await databaseConnection.authenticate({logging : false})
        await databaseConnection.sync({ logging : false, alter : false })
        console.log(`Conexão com o Banco de Dados ${environmentVariables["database"]} Bem-Sucedida`);
    } catch (error) {
        console.log(`Conexão com o Banco de Dados ${environmentVariables["database"]} Mal-Sucedida`);
        process.exit(0)
    }
}

async function endConnection() {
    try {
        await databaseConnection.close()
        console.log(`Desconexão com o Banco de Dados ${environmentVariables["database"]} Bem-Sucedida`);
    } catch (error) {
        console.log(`Desconexão com o Banco de Dados ${environmentVariables["database"]} Mal-Sucedida`);
        process.exit(0)
    }
}



export {
    databaseConnection,
    databaseModels,
    createModels,
    startConnection,
    endConnection
}