const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class Camionero extends Model {}

Camionero.init({
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    nombre: DataTypes.STRING,
    poblacion: DataTypes.STRING,
    direccion: DataTypes.STRING,
    salario: DataTypes.DATE,
    telefono: DataTypes.DATE
}, {
    sequelize,
    modelName: 'camionero',
    tableName: 'camioneros'
})

module.exports = Camionero