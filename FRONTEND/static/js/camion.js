const { response } = require("express")

function listarCamiones(){
    let url= 'http://localhost:3000/camiones';
    fetch(url,{})
    .then(response=> response.json())
    .then(data=>{
        let camiones= document.getElementById('camiones')

        let html =''
        let camionText=''
        data.map(camiones=>{
            camionText='<ul>'
            camion.camionero.map(camionero=>{
                camioneroText+=`<li>${camionero.nombre},${camionero.camionero.dni}</li>`
            })
            camionText+='</ul>'
            html +=`
            <tr>
            <td>${camion.matricula}</td>
            <td>${camion.modelo}</td>
            `
        })
        camiones.innerHTML= html
        document.getElementById('spiner').style.display= none
    });
}
function crearCamiones(){
const url= 'http://localhost:3000/camiones'

const nombre = document.getElementById("matricula")
const dni = document.getElementById("modelo")

const data={
    'matricula':matricula.value,
    'modelo':modelo.value
}
fetch(url,{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(data)
}).then(response=>response.json()).then( data =>{
    location.href= "/camiones"
}).catch(error=> {
    console.log(error);
    document.getElementById("error").innerText="ocurrio un error"+ error
})
}