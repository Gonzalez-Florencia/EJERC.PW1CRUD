const router = require('express').Router();
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/camionxcamioneros/listarCamionxcamioneros.html'));
})


router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/camionxcamioneros/crearCamionxcamioneros.html'));
})


router.get('/update/:id', (req, res) => {
    res.sendFile(path.resolve('./views/camionxcamioneros/editarCamionxcamioneros.html'));
})

module.exports = router;