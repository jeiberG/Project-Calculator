let primerNumero = null;
let operador = null;
let segundoNumero = null;

function sumar(a, b) {
    return a + b;
  }
  
function restar(a, b) {
    return a - b;
  }
  
function multiplicar(a, b) {
    return a * b;
  }
  
function dividir(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  }
  
