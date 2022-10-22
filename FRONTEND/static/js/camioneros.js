const { response } = require("express")
function crearCamionero(){
const url= 'http://localhost:3000/camioneros'

const nombre = document.getElementById("nombre")
const dni = document.getElementById("dni")

const data={
    'nombre':nombre.value,
    'dni':dni.value
}
fetch(url,{
    method:'POST',
    body:JSON.stringify(data)
}).then(response=>response.json()).then(data =>{
    location.href= "/camioneros"
}).catch(error=> {
    console.log(error);
    document.getElementById("error").innerText="ocurrio un error"+ error
})
}

