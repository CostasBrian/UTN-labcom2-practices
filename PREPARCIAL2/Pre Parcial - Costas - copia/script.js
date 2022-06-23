const buttonEvaluar = document.getElementById('b_evaluar')
const errorMesage = document.getElementById('error')
const resultMesage = document.getElementById('result')
const selectDivisa = document.getElementById('select')
const inputPesos = document.getElementById('pesos')

let valorDolar = 124;
let valorEuro = 150;

function evaluarDivisa() {
    if (selectDivisa.value == "" || inputPesos.value == "") {
        errorMesage.style.display = "block";
        setTimeout(() => {
            errorMesage.style.display = "none";
        }, 2000);

    } else {
        switch (selectDivisa.value) {
            case 'dolar':
                if (inputPesos.value !== "") {
                    valor = valorDolar / inputPesos.value
                    resultMesage.innerHTML = `El valor de dolares es $:${valor}`
                    resultMesage.style.display = "flex";
                }
                break;
            case 'euro':
                if (inputPesos.value !== "") {
                    valor = valorEuro / inputPesos.value
                    resultMesage.innerHTML = `El valor de euros es $:${valor}`
                    resultMesage.style.display = "flex";
                }
                break;
            default:
                break;
        }

    }
}
buttonEvaluar.addEventListener('click', evaluarDivisa)