import sequelize from "sequelize"
import { Model, Sequelize } from "sequelize"



function ChamadosModel(databaseConnection : Sequelize) : sequelize.ModelStatic<Model>{
    return databaseConnection.define('chamados', {
        id_chamado: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        categoria: {
            type: sequelize.STRING(100),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        descricao: {
            type: sequelize.STRING(250),
            primaryKey: false,
            autoIncrement: false,
            allowNull: true,
            unique: false
        },
        data_chamado: {
            type: sequelize.DATE,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        hora_chamado: {
            type: sequelize.TIME,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        }
    })
}



export {
    ChamadosModel
}