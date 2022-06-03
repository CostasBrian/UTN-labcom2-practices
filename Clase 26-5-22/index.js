let Datos = [];

const botonGuardar = document.getElementById('bGuardar') /*obtengo el boton desde html*/
const botonMostrar = document.getElementById('bMostrar')

const inputNombre = document.querySelector('#nombre') /*obtengo el nombre desde html con id*/
const inputEdad = document.querySelector('#edad') /*obtengo la edad desde html*/
const inputFecha = document.querySelector('#fecha') /*obtengo la fecha desde html*/
const inputProvincias = document.querySelector('#provincias') /*obtengo la provincia desde html*/

//--------------------------------------------------------------------------------------------------------------------------

function guardarDatos() { //valida, crea cada persona y la guarda en el arreglo datos y limpia el formulario
    let valido = true;
    let errores = []
    if (inputNombre.value.lenght < 0 && inputNombre.value.lenght > 50 || inputNombre.value == "") {
        valido = false
        alert("ingresar un nombre")
    }

    if (inputEdad.value < "18" || inputEdad.value > 99 || inputEdad.value == "") {
        valido = false
        alert("ingresar una edad entre 18 y 99")
    }

    if (inputFecha.value == "") {
        valido = false
        alert("ingresar una fecha")
    }

    if (inputProvincias == "") {
        valido = false
        alert("seleccionar una provincia")
    }
    if (valido) {
        let persona = {
            nombre: inputNombre.value,
            edad: inputEdad.value,
            fecha: inputFecha.value,
            provincias: inputProvincias.value
        }
        Datos.push(persona)
        console.log(Datos)

        //limpia formulario
        inputNombre.value = ""
        inputEdad.value = ""
        inputFecha.value = ""
        inputProvincias.value = ""
    }

}
//--------------------------------------------------------------------------------------------------------------------------
function mostrarDatos() { //mostrar datos en el html
    //guardarDatos();

    const tbodyResultado = document.getElementById("resultado")

    const tablaFila = document.createElement("tr")

    const tablaCeldaNombre = document.createElement("td")
    const tablaCeldaEdad = document.createElement("td")
    const tablaCeldaFecha = document.createElement("td")
    const tablaCeldaProvincia = document.createElement("td")

    tablaCeldaNombre.textContent = persona.nombre
    tablaCeldaEdad.textContent = persona.Edad
    tablaCeldaFecha.textContent = persona.Fecha
    tablaCeldaProvincia.textContent = persona.provincia

    tablaFila.appendChild(tablaCeldaNombre)
    tablaFila.appendChild(tablaCeldaEdad)
    tablaFila.appendChild(tablaCeldaFecha)
    tablaFila.appendChild(tablaCeldaProvincia)

    tbodyResultado.appendChild(tablaFila)
}

botonGuardar.addEventListener("click", guardarDatos);
botonMostrar.addEventListener("click", mostrarDatos);


function validar() {
    let valido = true;
    let errores = []
    if (inputNombre.value.lenght < 0 && inputNombre.value.lenght > 50 || inputNombre.value == "") {
        valido = false
        alert("ingresar un nombre")
    }

    if (inputEdad.value < "18" || inputEdad.value > 99 || inputEdad.value == "") {
        valido = false
        alert("ingresar una edad entre 18 y 99")
    }

    if (inputFecha.value == "") {
        valido = false
        alert("ingresar una fecha")
    }

    if (inputProvincias == "") {
        valido = false
        alert("seleccionar una provincia")
    }
    return valido

}