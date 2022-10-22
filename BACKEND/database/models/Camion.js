const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class Camion extends Model {}

Camion.init({
    matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    tipo: DataTypes.STRING,
    modelo: DataTypes.STRING,
    potencia: DataTypes.DATE
}, {
    sequelize,
    modelName: 'camion',
    tableName: 'camiones'
})

module.exports = Camion