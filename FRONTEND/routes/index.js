const router = require('express').Router();
const path = require('path');

//router.get('/', (req, res) => {
  //  res.sendFile(path.resolve('./views/index.html'));
////})
//router.get('/provincias', (req, res) => {
 //   res.sendFile(path.resolve('./views/provincias.html'));
////})
//router.get('/paquetes', (req, res) => {
 //   res.sendFile(path.resolve('./views/paquetes.html'));
//})
//router.get('/camiones', (req, res) => {
 //   res.sendFile(path.resolve('./views/camiones.html'));
//})
//router.get('/camioneros', (req, res) => {
 //   res.sendFile(path.resolve('./views/camioneros.html'));
//})
//router.get('/camionxcamioneros', (req, res) => {
 //   res.sendFile(path.resolve('./views/camionxcamioneros.html'));
//)

const camionerosRouter= require('./camioneros.routes')
const paqueteRouter= require('./paquetes.routes')
const provinciaRouter=require('./provincias.routes')
const camionesRouter=require('./camiones.routes')


router.get('/',(req,res)=>{
  res.sendFile(path.resolve('./views/index.html'));
})

router.use('/camions',camionesRouter)
//router.use('/camioners',camionerosRouter)
//router.use('/paquets',paqueteRouter)
//router.use('/prov',provinciaRouter)


module.exports = router;
