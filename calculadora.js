
const display = document.querySelector('.display-text');
const btnNumeros = document.querySelectorAll('.btn-number');
const btnOperaciones = document.querySelectorAll('.btn-operator');
const btnClear = document.querySelector('.btn-function');


let numeroActual = '0';
let primerNumero = null;
let operador = null;
let resetDisplay = false;

// Función para actualizar el display
function actualizarDisplay() {
    display.textContent = numeroActual;
}

// Eventos para los botones numéricos
btnNumeros.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.textContent;
        if (numeroActual === '0' || resetDisplay) {
            numeroActual = number;
            resetDisplay = false;
        } else {
            numeroActual += number;
        }
        
        actualizarDisplay();
    });
});

// eventos operadores
btnOperaciones.forEach(button => {
    button.addEventListener('click', () => {
        if (operador && !resetDisplay) {
            calculate();
        }
        
        primerNumero = numeroActual;
        operador = button.textContent;
        resetDisplay = true;
    });
});

// Evento para el igual 
document.querySelector('.btn-equals').addEventListener('click', () => {
    calculate();
});

// Evento para el botón AC 
btnClear.addEventListener('click', () => {
    numeroActual = '0';
    primerNumero = null;
    operador = null;
    actualizarDisplay();
});

// Función para realizar los cálculos
function calculate() {
    if (operador === null || primerNumero === null) return;
    
    const segundoNumero = numeroActual;
    let resultadoOperacion = 0;
    
    switch (operador) {
        case '+':
            resultadoOperacion = parseFloat(primerNumero) + parseFloat(segundoNumero);
            break;
        case '−':
            resultadoOperacion = parseFloat(primerNumero) - parseFloat(segundoNumero);
            break;
        case '×':
            resultadoOperacion = parseFloat(primerNumero) * parseFloat(segundoNumero);
            break;
        case '÷':
            resultadoOperacion = parseFloat(primerNumero) / parseFloat(segundoNumero);
            break;
    }
    
    numeroActual = resultadoOperacion.toString();
    operador = null;
    resetDisplay = true;
    actualizarDisplay();
}

actualizarDisplay();