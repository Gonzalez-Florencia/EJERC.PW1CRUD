const router = require('express').Router()
const {Camion,Camionero,Paquete}=require('../database/models')


router.get("/",(req, res)=>{
    Paquete.findAll({
        attributes:['codigo','descripcion','destinatario','direccionDestinatario',],
        include:{
            model:Paquete,
            attributes:['id','codigo'],
        }
    }).then(list=>{
        res.json(list)
    })
})

router.post("/create",(req,res)=>{
    Paquete.create({
        codigo: req.body.codigo,
        descripcion:req.body.descripcion,
        destinatario:req.body.destinatario,
        direccionDestinatario: req.body.direccionDestinatario,
    }).then(Paquete=>{
        res.json(camion)
    }).catch(error=>{
        res.json(error)
    })
})



router.put('/update/:id',(req,res)=>{
    Paquete.update({
        codigo: req.body.codigo,
        descripcion:req.body.descripcion,
        destinatario:req.body.destinatario,
        direccionDestinatario: req.body.direccionDestinatario,

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
    Paquete.destroy({
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