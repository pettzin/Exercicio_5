
let display = document.getElementById('display');
let numeroAtual = '';
let operador = '';
let numeroAnterior = '';
let memoria = 0;

function adicionarNumero(numero) {
    numeroAtual += numero;
    display.value = numeroAtual;
}


function adicionarOperador(op) {
    if (numeroAtual === '') return; 
    operador = op;
    numeroAnterior = numeroAtual;
    numeroAtual = '';
}


function adicionarPonto() {
    if (!numeroAtual.includes('.')) {
        numeroAtual += '.';
        display.value = numeroAtual;
    }
}


function limpar() {
    numeroAtual = '';
    operador = '';
    numeroAnterior = '';
    display.value = '';
}


function calcular() {
    if (numeroAnterior !== '' && operador !== '' && numeroAtual !== '') {
        let resultado;
        switch (operador) {
            case '+':
                resultado = parseFloat(numeroAnterior) + parseFloat(numeroAtual);
                break;
            case '-':
                resultado = parseFloat(numeroAnterior) - parseFloat(numeroAtual);
                break;
            case '*':
                resultado = parseFloat(numeroAnterior) * parseFloat(numeroAtual);
                break;
            case '/':
                resultado = parseFloat(numeroAnterior) / parseFloat(numeroAtual);
                break;
            default:
                resultado = 0;
        }
        display.value = resultado.toString();
        numeroAtual = resultado.toString();
        numeroAnterior = '';
        operador = '';
    }
}


function calcularPotencia() {
    if (numeroAtual === '') return; 
    let expoente = prompt("Digite o expoente (y):");
    if (expoente !== null) {
        let resultado = Math.pow(parseFloat(numeroAtual), parseFloat(expoente));
        display.value = resultado.toString();
        numeroAtual = resultado.toString(); 
    }
}


function arredondar() {
    if (numeroAtual === '') return; 
    let resultado = Math.round(parseFloat(numeroAtual));
    display.value = resultado.toString();
    numeroAtual = resultado.toString(); 
}


function raizQuadrada() {
    if (numeroAtual === '') return; 
    let resultado = Math.sqrt(parseFloat(numeroAtual));
    display.value = resultado.toString();
    numeroAtual = resultado.toString(); 
}


function calcule() {
    try {
        let resultado = eval(display.value); 
        display.value = resultado.toString();
        numeroAtual = resultado.toString();
    } catch (e) {
        display.value = "Erro"; 
        numeroAtual = '';
        operador = '';
        numeroAnterior = '';
    }
}


function memoriaRecall() {
    display.value = memoria.toString();
    numeroAtual = memoria.toString();
}


function memoriaAdicionar() {
    memoria += parseFloat(numeroAtual);
    display.value = memoria.toString();
}


function memoriaSubtrair() {
    memoria -= parseFloat(numeroAtual);
    display.value = memoria.toString();
}


function memoriaLimpar() {
    memoria = 0;
    display.value = '';
}

