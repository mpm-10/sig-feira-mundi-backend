import sequelize from "sequelize"
import { Model, Sequelize } from "sequelize"





function UsuariosModel(databaseConnection : Sequelize) : sequelize.ModelStatic<Model>{
    return databaseConnection.define('usuarios', {
        id_usuario: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        nome_real: {
            type: sequelize.STRING(100),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        nome_usuario: {
            type: sequelize.STRING(100),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: true
        },
        senha: {
            type: sequelize.STRING(100),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        email: {
            type: sequelize.STRING(100),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: true
        },
        data_registro: {
            type: sequelize.DATE,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        }
    });
}

export {
    UsuariosModel
}