const router = require('express').Router()
const { Camion, Camionero, Camionxcamionero} = require('../database/models')

router.get("/:id", (req, res) => {
    Camionxcamionero.findByPk(req.params.id,{}).then(obj => {
        res.json(obj)
    })
})

router.get("/", (req, res) => {
    Camionxcamionero.findAll({
        attributes: ['id','fecha'],
        include: [{
            model: Camion,
            attributes: ['matricula']
        },{
            model: Camionero,
            attributes: ['dni'],
        }]
    }).then(list => {
        res.json(list)
    })
})
router.post("/create", (req, res) => {
    Camionxcamionero.create({
        id: req.body.id,
        fecha: req.body.fecha,
        matricula: req.body.matricula,
        dni: req.body.dni
    }).then(Camionxcamionero => {
        res.json(Camionxcamionero)
    })
})

router.put('/update/:id', (req, res) => {
    console.log(req.body)
    Camionxcamionero.update({
        fecha: req.body.fecha,
        matricula: req.body.matricula,
        dni: req.body.dni
    }, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

router.delete('/delete/:id', (req, res) => {
    Camionxcamionero.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})
    
module.exports = router