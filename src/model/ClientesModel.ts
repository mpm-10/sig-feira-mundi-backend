import sequelize from "sequelize"
import { Model, Sequelize } from "sequelize"



function ClientesModel(databaseConnection : Sequelize) : sequelize.ModelStatic<Model>{
    return databaseConnection.define('clientes', {
        id_cliente: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        moedas: {
            type: sequelize.INTEGER,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
    })
}



export {
    ClientesModel
}