import sequelize from "sequelize"
import { Model, Sequelize } from "sequelize"



function PromocoesModel(databaseConnection : Sequelize) : sequelize.ModelStatic<Model>{
    return databaseConnection.define('promocoes', {
        id_promocao: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        porcentagem_desconto: {
            type: sequelize.REAL,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        data_inicio: {
            type: sequelize.DATE,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        hora_inicio: {
            type: sequelize.TIME,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        data_fim: {
            type: sequelize.DATE,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        hora_fim: {
            type: sequelize.TIME,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        }
    })
}



export {
    PromocoesModel
}