import sequelize from "sequelize"
import { Model, Sequelize } from "sequelize"





function ComerciosModel(databaseConnection : Sequelize) : sequelize.ModelStatic<Model>{
    return databaseConnection.define('comercios', {
        id_comercio: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        nome: {
            type: sequelize.STRING(100),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        endereco: {
            type: sequelize.STRING(100),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: true
        },
        telefone: {
            type: sequelize.STRING(50),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        latitude: {
            type: sequelize.REAL,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: true
        },
        longitude: {
            type: sequelize.REAL,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: true
        },
        geometria: {
            type: sequelize.GEOMETRY('POINT', 4326),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
    });
}

export {
    ComerciosModel
}