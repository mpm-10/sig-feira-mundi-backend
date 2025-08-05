import sequelize from "sequelize"
import { Model, Sequelize } from "sequelize"



function ComerciosFavoritosModel(databaseConnection : Sequelize) : sequelize.ModelStatic<Model>{
    return databaseConnection.define('comercios_favoritos', {}, {
        timestamps: false
    })
}



export {
    ComerciosFavoritosModel
}