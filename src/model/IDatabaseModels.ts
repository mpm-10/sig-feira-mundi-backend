import type { Model } from "sequelize"
import type sequelize from "sequelize"



interface IDatabaseModels{
    "usuarios"? : sequelize.ModelStatic<Model>
    "clientes"? : sequelize.ModelStatic<Model>
    "comerciantes"? : sequelize.ModelStatic<Model>
    "administradores"? : sequelize.ModelStatic<Model>
    "comercios"? : sequelize.ModelStatic<Model>
    "produtos"? : sequelize.ModelStatic<Model>
    "tipoProdutos"? : sequelize.ModelStatic<Model>
    "promocoes"? : sequelize.ModelStatic<Model>
    "avaliacoes"? : sequelize.ModelStatic<Model>
    "chamados"? : sequelize.ModelStatic<Model>
    "resolucaoChamados"? : sequelize.ModelStatic<Model>
}



export type {
    IDatabaseModels
}