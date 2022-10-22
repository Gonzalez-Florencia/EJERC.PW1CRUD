const router = require('express').Router()
const {Camion,Camionero,CamionXcamionero}=require('../database/models')


router.post('/create',(req,res)=>{
    Camion.findByPk(req.body.camionId).then(camion =>{
        Camionero.findByPk(req.body.camioneroDni).then(camionero=>{
            CamionXcamionero.create({
                camionId: CamionXcamionero.id,
                camioneroDni:camionero.dni,
        }).then(camionXcamionero=>{
            res.json(camionXcamionero)
        })
        })
    })
})

module.exports=router;