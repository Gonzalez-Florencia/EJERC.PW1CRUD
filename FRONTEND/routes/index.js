//const router = require('express').Router();
//const path = require('path');

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

//module.exports = router;
const express =require('express');
const app = express();
const port = 8000;
const router = require("./routes");
app.use(express.json());
app.use(express.urlencoded({ extended: true} ));
app.use('/css', express.static(`${_dirname}/static/css`));
app.use('/js', express.static(`${_dirname}/static/js`));
app.use('/img', express.static(`${_dirname}/static/img`));

app.use("/",router)
app.listen(port,()=>{
    console.log(`Frontend ${port}`)
})