const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class Paquete extends Model {}

Paquete.init({
    descripcion: DataTypes.STRING,
    codigo: DataTypes.FLOAT,
    destinatario: DataTypes.STRING
}, {
    sequelize,
    modelName: 'paquete',
    tableName: 'paquetes'
})

module.exports = Paquete 
