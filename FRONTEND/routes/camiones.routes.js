const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/camiones/listarCamiones.html'));
})

module.exports = router;
