const router = require('express').Router()
const {Camion,Camionero,Provincia}=require('../database/models')


router.get("/",(req, res)=>{
    Provincia.findAll({
        attributes:['codigoProvincia','nombre'],
        include:{
            model:Provincia,
            attributes:['id','codigoProvincia'],
        }
    }).then(list=>{
        res.json(list)
    })
})

router.post("/create",(req,res)=>{
    Provincia.create({
        codigoProvincia: req.body.codigoProvincia,
        nombre:req.body.nombre,

    }).then(Provincia=>{
        res.json(camion)
    }).catch(error=>{
        res.json(error)
    })
})



router.put('/update/:id',(req,res)=>{
    Provincia.update({
        codigoProvincia: req.body.codigoProvincia,
        nombre:req.body.nombre,

    },
    {
        where:{
            id:req.params.id
        }
    }).then( data=>{
        res.json(data)
    }).catch(error =>{
    res.json(error)
})
})

router.delete('/delete/:id',(req,res)=>{
    Provincia.destroy({
        where:{
            id:req.params.id
        }
    }).then( data=>{
        res.json(data)
    }).catch(error=>{
        res.json(error)
    })
})




module.exports=router;