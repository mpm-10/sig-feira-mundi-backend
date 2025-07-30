import sequelize from "sequelize"
import { Model, Sequelize } from "sequelize"





function TipoProdutosModel(databaseConnection : Sequelize) : sequelize.ModelStatic<Model>{
    return databaseConnection.define('tipo_produtos', {
        id_tipo_produto: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        nome_tipo: {
            type: sequelize.STRING(100),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: true
        },
        descricao: {
            type: sequelize.STRING(250),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: true
        }
    });
}

export {
    TipoProdutosModel
}