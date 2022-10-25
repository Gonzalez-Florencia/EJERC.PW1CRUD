const { response } = require("express")

function listarCamioneros(){
    let url= 'http://localhost:3000/camioneros';
    fetch(url,{})
    .then(response=> response.json())
    .then(data=>{
        let camioneros= document.getElementById('camioneros')

        let html =''
        let camionText=''
        data.map(camionero=>{
            camionText='<ul>'
            camionero.camion.map(camionero=>{
                camionText+=`<li>${cami}`
            })
        })
    })
}
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
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(data)
}).then(response=>response.json()).then(data =>{
    location.href= "/camioneros"
}).catch(error=> {
    console.log(error);
    document.getElementById("error").innerText="ocurrio un error"+ error
})
}

