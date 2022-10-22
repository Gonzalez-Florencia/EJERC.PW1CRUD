const router = require('express').Router()
const {Camion,Camionero}=require('../database/models')


router.get("/",(req, res)=>{
    Camion.findAll({
        attributes:['id','matricula','modelo'],
        include:{
            model:Camionero,
            attributes:['nombre','dni'],
        }
    }).then(list=>{
        res.json(list)
    })
})

router.post("/",(req,res)=>{
    Camion.create({
        matricula: req.body.matricula,
        modelo:req.body.modelo,
    }).then(camion=>{
        res.json(camion)
    }).catch(error=>{
        res.json(error)
    })
})


module.exports=router;