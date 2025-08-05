import sequelize from "sequelize"
import { Model, Sequelize } from "sequelize"



function ComerciantesModel(databaseConnection : Sequelize) : sequelize.ModelStatic<Model>{
    return databaseConnection.define('comerciantes', {
        id_usuario: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        telefone_comercial: {
            type: sequelize.STRING(50),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        }
    }, {
        timestamps: false
    })
}



export {
    ComerciantesModel
}