const buttonEvaluar = document.getElementById('b_evaluar')
const selectDivisa = document.getElementById('select')
const inputPesos = document.getElementById('pesos')
const errorMesage = document.getElementById('error')
const resultMesage = document.getElementById('result')

const buttonAgregar = document.getElementById('b_agregar')
const inputNewDivisa = document.getElementById('new-divisa')
const inputNewValue = document.getElementById('valor-divisa')

const valorDolar = 124;
const valorEuro = 150;

//-------------------calcular valor------------------------------------
function evaluarDivisa() {
    if (selectDivisa.value == "" || inputPesos.value == "") {
        errorMesage.style.display = "flex";
        setTimeout(() => {
            errorMesage.style.display = "none";
        }, 2000);

    } else {
        switch (selectDivisa.value) {
            case 'dolar':
                if (inputPesos.value !== "") {
                    valor = valorDolar / inputPesos.value
                    resultMesage.innerHTML = `El valor en dolares es $:${valor}`
                    resultMesage.style.display = "flex";
                }
                break;
            case 'euro':
                if (inputPesos.value !== "") {
                    valor = valorEuro / inputPesos.value
                    resultMesage.innerHTML = `El valor en euros es $:${valor}`
                    resultMesage.style.display = "flex";
                }
                break;
            default:
                break;
        }
    }
}
buttonEvaluar.addEventListener('click', evaluarDivisa)

//------------------nueva funcionalidad-------------------------------
function agregarDivisa() {
    if (inputNewDivisa.value == "" || inputNewvalue.value == "") {
        errorMesage.style.display = "flex";
        setTimeout(() => {
            errorMesage.style.display = "none";
        }, 2000);
    } else {
        const opcion = document.createElement("option")
        opcion.value = inputNewDivisa.value
        opcion.textContent = inputNewDivisa.value
        selectDivisa.appendChild(opcion)
            //let newValor = inputNewvalue.value
    }
}
buttonAgregar.addEventListener('click', agregarDivisa)