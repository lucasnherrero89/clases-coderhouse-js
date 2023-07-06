// FUNCIONES

// Funcion declarada
function miFuncion() {
    console.log('Uno');
    console.log('Dos');
}

miFuncion();

// Funcion expresada

const funcionExpresada = function () {
    console.log('Soy una funcion expresada');
};


funcionExpresada();

// De que sirve declarar una funcion antes de declararla?

function gatito() {
    if (1 === 1) {
        var cosme = 'gatito';
    }
    console.log(cosme);
}

gatito();

// Funciones anonimas

// Microdesafio

function calculadora() {
    let operacion = prompt('Que operacion desea hacer (s-r-m-d)');
    let num_a = parseInt(prompt('Ingrese el numero a'));
    let num_b = parseInt(prompt('Ingrese el numero b'));
    if (!isNaN(num_a) && !isNaN(num_b)) {
        switch (operacion.toUpperCase()) {
            case 'S':
                return num_a + num_b;
            case 'R':
                return num_a - num_b;
            case 'M':
                return num_a * num_b;
            case 'D':
                return num_a / num_b;
        }
    }
}