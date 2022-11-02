// Auxiliares

function disableButton(id) {
    const button = document.getElementById(id)
    button.className = button.className + " disabled"
    button.setAttribute('disabled', 'disabled')
    button.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
}

function getIdFromUrl() {
    const route = new URL(window.location).pathname
    const pathArray = route.split('/')
    return pathArray[pathArray.length -1]
}

// CRUD

function getCamionxcamionero() {
    const id = getIdFromUrl()
    const url = `http://localhost:3000/camionxcamionero/${id}`
    console.log(id)

    fetch(url).then(res => { return res.json() }).then(object => {
        console.log(object)
        document.getElementById("fecha").value = object.fecha
        document.getElementById("matricula").value = object.matricula
        document.getElementById("dni").value = object.dni

        document.getElementById("form").className = ""
        document.getElementById('spinner').className = "d-none"

    })

}

function listarCamionxcamioneroRutas() {
    let url = 'http://localhost:3000/camionxcamionero';
    fetch(url, {})
        .then(response => response.json())
        .then(data => {
            let camionxcamionero = document.getElementById('camionxcamionero')

            let html = ''
            data.map(camionxcamionero => {
                console.log(camionxcamionero)
                html += `
                    <tr id="${camionxcamionero.id}"><td>${camionxcamionero.id}</td>
                        <td class="fecha">${camionxcamionero.fecha}</td>
                        <td class="matricula">${camionxcamionero.matricula}</td>
                        <td class="dni">${camionxcamionero.dni}</td>
                        <td>
                            <a type="button" href="/camioxcamionero/update/${camionxcamionero.id}" class="btn btn-outline-light btn-sm"><i class="bi bi-pencil-square text-dark"></i></a>
                            <button type="button" class="btn btn-outline-light btn-sm" onclick="eliminarCamion('${camionxcamionero.id}')"><i class="bi bi-trash3-fill text-danger"></i></button>
                        </td>
                    </tr>
                `
            })
            camionxcamionero.innerHTML = html
            document.getElementById('spinner').style.display = 'none'
        });
}

function crearCamionxcamioneros() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const url = 'http://localhost:3000/camionxcamionero/create'
    const id = document.getElementById("id")
    const fecha = document.getElementById("fecha")
    const matricula = document.getElementById("matricula")
    const dni = document.getElementById("dni")

    const data = {
        'id': id.value,
        'fecha': fecha.value,
        'matricula': matricula.value,
        'dnidni':dni.value
    }

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/camionxcamionero"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function editarCamionxcamioneros() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const id = getIdFromUrl()
    const url = `http://localhost:3000/camionxcamionero/update/${id}`
    const fecha = document.getElementById("fecha")
    const matricula = document.getElementById("matricula")
    const dni = document.getElementById("dni")

    const data = {
        'id': id.value,
        'fecha': fecha.value,
        'matricula': matricula.value,
        'dnidni':dni.value
    }
    console.log(data)

    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/camioxcamionero"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function eliminarCamionxcamionero(id) {
    const item = document.getElementById(id)
    const fecha = item.querySelector('.fecha').innerText

    if (confirm(`¿Desea eliminar  "${id} de fecha ${fecha}"?`)) {
        const url = `http://localhost:3000/camionxcamionero/delete/${id}`

        fetch(url, {
            method: 'DELETE'
        }).then(response => response.json()).then(data => {
            location.href = "/camionxcamionero"
        }).catch(error => {
            console.log(error);
            document.getElementById("error").innerText = "Ocurrió un error " + error
        })
    }
}