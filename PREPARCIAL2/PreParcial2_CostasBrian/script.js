const buttonEvaluar = document.getElementById('b_evaluar')
const selectDivisa = document.getElementById('select')
const inputPesos = document.getElementById('pesos')
const errorMesage = document.getElementById('error')
const resultMesage = document.getElementById('result')

const buttonAgregar = document.getElementById('b_agregar')
const inputNewDivisa = document.getElementById('new-divisa')
const inputNewValue = document.getElementById('valor-divisa')

const valoresDivisas = {
    dolar: 124,
    euro: 130,
}

//-------------------calcular valor------------------------------------
function evaluarDivisa() {
    if (selectDivisa.value == "" || inputPesos.value == "") {
        errorMesage.style.display = "flex";
        setTimeout(() => {
            errorMesage.style.display = "none";
        }, 2000);

    } else {
        let Pesos = Number(inputPesos.value);
        let valorDivisa = Number(valoresDivisas[selectDivisa.value]);

        let valor = (Pesos / valorDivisa).toFixed(2);
        resultMesage.innerHTML = `El valor en ${selectDivisa.value} es: $${valor}`
        resultMesage.style.display = "flex";

        inputPesos.value = ""

    }

}

buttonEvaluar.addEventListener('click', evaluarDivisa)

//------------------nueva funcionalidad-------------------------------
function agregarDivisa() {

    if (inputNewDivisa.value == "" || inputNewValue.value == "") {
        errorMesage.style.display = "flex";
        setTimeout(() => {
            errorMesage.style.display = "none";
        }, 2000);
    } else {
        const opcion = document.createElement("option")
        opcion.value = inputNewDivisa.value
        opcion.textContent = inputNewDivisa.value
        selectDivisa.appendChild(opcion)
        let newValor = inputNewValue.value
        valoresDivisas[inputNewDivisa.value] = Number(newValor)
    }
    inputNewDivisa.value = ""
    inputNewValue.value = ""
}
buttonAgregar.addEventListener('click', agregarDivisa)