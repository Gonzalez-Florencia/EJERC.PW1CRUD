const{Camion,Camionero,CamionXcamionero,Paquete,Provincia}=require('./models')                                         

Camion.belongsToMany(Camionero, { through: CamionXcamionero, foreignKey: 'camionMatricula' })
Camionero.belongsToMany(Camion, { through: CamionXcamionero, foreignKey: 'camioneroDni' })
