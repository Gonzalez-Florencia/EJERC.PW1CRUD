const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/camionxcamioneros/listarCamionxcamionero.html'));
})

module.exports = router;