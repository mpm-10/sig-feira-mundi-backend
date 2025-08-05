import sequelize from "sequelize"
import { Model, Sequelize } from "sequelize"



function AvaliacoesModel(databaseConnection : Sequelize) : sequelize.ModelStatic<Model>{
    return databaseConnection.define('avaliacoes', {
        grau: {
            type: sequelize.REAL,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        texto_avaliacao: {
            type: sequelize.STRING(250),
            primaryKey: false,
            autoIncrement: false,
            allowNull: true,
            unique: false
        }
    }, {
        timestamps: false
    })
}



export {
    AvaliacoesModel
}