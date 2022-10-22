const router = require('express').Router()
const {Camion,Camionero}=require('../database/models')


router.get("/",(req, res)=>{
    Camionero.findAll({
        attributes:['dni','nombre','telefono','direccion','salario','poblacion'],
        include:{
            model:Camion,
            attributes:['id','mmatricula'],
        }
    }).then(list=>{
        res.json(list)
    })
})

router.post("/create",(req,res)=>{
    Camionero.create({
        dni: req.body.dni,
        nombre:req.body.nombre,
    }).then(camionero=>{
        res.json(camionero)
    }).catch(error=>{
        res.json(error)
    })
})


module.exports=router;