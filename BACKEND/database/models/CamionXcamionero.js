const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class Camionxcamionero extends Model {}

Camionxcamionero.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    fecha: DataTypes.DATE
}, {
    sequelize,
    modelName: 'camionxcamionero',
    tableName: 'camionxcamioneros'
})

module.exports = Camionxcamionero