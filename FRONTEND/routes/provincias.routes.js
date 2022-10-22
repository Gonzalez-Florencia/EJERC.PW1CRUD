const router = require('express').Router();
const path = require('path');

// Listar provincias --> /provincias
router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/provincias/listarProvincias.html'));
})

// Crear provincias --> /provincias/create
router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/provincias/crearProvincia.html'));
})

// Editar provincia --> /provincia/update/:id
router.get('/update/:id', (req, res) => {
    res.sendFile(path.resolve('./views/provincias/editarProvincia.html'));
})

module.exports = router;