const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/paquetes/listarPaquetes.html'));
})

module.exports = router;