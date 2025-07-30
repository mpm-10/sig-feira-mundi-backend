import sequelize from "sequelize"
import { Model, Sequelize } from "sequelize"





function ProdutosModel(databaseConnection : Sequelize) : sequelize.ModelStatic<Model>{
    return databaseConnection.define('produtos', {
        id_produto: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        nome_produto: {
            type: sequelize.STRING(100),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        quantidade: {
            type: sequelize.INTEGER,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        preco: {
            type: sequelize.REAL,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        }
    });
}

export {
    ProdutosModel
}