import sequelize from "sequelize"
import { Model, Sequelize } from "sequelize"





function AdministradoresModel(databaseConnection : Sequelize) : sequelize.ModelStatic<Model>{
    return databaseConnection.define('administradores', {
        id_administrador: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        token_acesso: {
            type: sequelize.STRING(250),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: true
        },
        nivel_acesso: {
            type: sequelize.INTEGER,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        area: {
            type: sequelize.STRING(100),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        ultima_atividade: {
            type: sequelize.DATE,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        }
    });
}

export {
    AdministradoresModel
}