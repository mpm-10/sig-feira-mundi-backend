import { environmentVariables } from "../io/EnvironmentVariables.js"
import { Sequelize } from "sequelize"
import type { IDatabaseModels } from "./IDatabaseModels.js"
import { UsuariosModel } from "./UsuariosModel.js"
import { ClientesModel } from "./ClientesModel.js"
import { ComerciantesModel } from "./ComerciantesModel.js"
import { AdministradoresModel } from "./AdministradoresModel.js"
import { ComerciosModel } from "./ComerciosModel.js"
import { ProdutosModel } from "./ProdutosModel.js"
import { TipoProdutosModel } from "./TipoProdutosModel.js"
import { PromocoesModel } from "./PromocoesModel.js"
import { ChamadosModel } from "./ChamadosModel.js"
import { AvaliacoesModel } from "./AvaliacoesModel.js"
import { ResolucaoChamadosModel } from "./ResolucaoChamadosModel.js"
import { ComerciosFavoritosModel } from "./ComerciosFavoritosModel.js"
import { ProdutosFavoritosModel } from "./ProdutosFavoritosModel.js"



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
    chamados : ChamadosModel(databaseConnection),
    avaliacoes : AvaliacoesModel(databaseConnection),
    comerciosFavoritos : ComerciosFavoritosModel(databaseConnection),
    produtosFavoritos : ProdutosFavoritosModel(databaseConnection),
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
        foreignKey: "id_usuario",
        onDelete: "CASCADE"
    })
    databaseModels["comercios"].belongsTo(databaseModels["comerciantes"], {
        foreignKey: "id_usuario",
        onDelete: "CASCADE"
    })

    databaseModels["comercios"].hasMany(databaseModels["promocoes"], {
        foreignKey: "id_comrc",
        onDelete: "CASCADE"
    })
    databaseModels["promocoes"].belongsTo(databaseModels["comercios"], {
        foreignKey: "id_comrc",
        onDelete: "CASCADE"
    })

    databaseModels["comercios"].hasMany(databaseModels["produtos"], {
        foreignKey: "id_comrc",
        onDelete: "CASCADE"
    })
    databaseModels["produtos"].belongsTo(databaseModels["comercios"], {
        foreignKey: "id_comrc",
        onDelete: "CASCADE"
    })

    databaseModels["produtos"].hasMany(databaseModels["promocoes"], {
        foreignKey: "id_produto",
        onDelete: "CASCADE"
    })
    databaseModels["promocoes"].belongsTo(databaseModels["produtos"], {
        foreignKey: "id_produto",
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
        foreignKey: "id_usuario",
        otherKey: "id_comrc",
        onDelete: "CASCADE",
        timestamps: false
    })
    databaseModels["comercios"].belongsToMany(databaseModels["clientes"], {
        through : databaseModels["avaliacoes"],
        foreignKey: "id_comrc",
        otherKey: "id_usuario",
        onDelete: "CASCADE",
        timestamps: false
    })

    databaseModels["clientes"].belongsToMany(databaseModels["comercios"], {
        through : databaseModels["comerciosFavoritos"],
        foreignKey: "id_usuario",
        otherKey: "id_comrc",
        onDelete: "CASCADE",
        timestamps: false
    })
    databaseModels["comercios"].belongsToMany(databaseModels["clientes"], {
        through : databaseModels["comerciosFavoritos"],
        foreignKey: "id_comrc",
        otherKey: "id_usuario",
        onDelete: "CASCADE",
        timestamps: false
    })

    databaseModels["clientes"].belongsToMany(databaseModels["tipoProdutos"], {
        through : databaseModels["produtosFavoritos"],
        foreignKey: "id_usuario",
        otherKey: "id_tipo_produto",
        onDelete: "CASCADE",
        timestamps: false
    })
    databaseModels["tipoProdutos"].belongsToMany(databaseModels["clientes"], {
        through : databaseModels["produtosFavoritos"],
        foreignKey: "id_tipo_produto",
        otherKey: "id_usuario",
        onDelete: "CASCADE",
        timestamps: false
    })

    databaseModels["chamados"].belongsToMany(databaseModels["administradores"], {
        through : databaseModels["resolucaoChamados"],
        foreignKey: "id_chamado",
        otherKey: "id_usuario",
        onDelete: "CASCADE",
        timestamps: false
    })
    databaseModels["administradores"].belongsToMany(databaseModels["chamados"], {
        through : databaseModels["resolucaoChamados"],
        foreignKey: "id_usuario",
        otherKey: "id_chamado",
        onDelete: "CASCADE",
        timestamps: false
    })

    Object.values(databaseModels).forEach((model: any) => {
        if (typeof model.associate === "function") {
            model.associate(databaseModels);
        }
    });
}

async function startConnection(){
    try {
        await databaseConnection.authenticate({ logging : false })
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