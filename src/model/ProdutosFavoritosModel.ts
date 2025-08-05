import sequelize from "sequelize"
import { Model, Sequelize } from "sequelize"



function ProdutosFavoritosModel(databaseConnection : Sequelize) : sequelize.ModelStatic<Model>{
    return databaseConnection.define('produtos_favoritos', {}, {
        timestamps: false
    })
}



export {
    ProdutosFavoritosModel
}