import sequelize from "sequelize"
import { Model, Sequelize } from "sequelize"



function ResolucaoChamadosModel(databaseConnection : Sequelize) : sequelize.ModelStatic<Model>{
    return databaseConnection.define('resolucao_chamados', {
        status: {
            type: sequelize.STRING(50),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        prioridade: {
            type: sequelize.INTEGER,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
    }, {
        timestamps: false
    })
}



export {
    ResolucaoChamadosModel
}