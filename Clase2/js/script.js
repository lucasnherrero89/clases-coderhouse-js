// Condicionales

let edadMinima = 18

if (edadMinima < 18) {
    console.warn('Volve a tu casa')
} else if (edadMinima >= 18) {
    console.log('Puede entrar a la disco')
} else {
    console.log('Algo no esta bien ' + edadMinima)
}


let lenguajeRequerido = 'JS'
let idiomaRequerido = 'frances'

// noinspection EqualityComparisonWithCoercionJS
if ((lenguajeRequerido == 'JS' && (idiomaRequerido = 'Ingles')) || (idiomaRequerido == 'frances')) { // Usar ===?
    console.log('Puede Acceder al puesto')
} else {
    console.warn('Debe cumplir con todos los requisitos.')
}


// CICLOS

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue
    }
    console.log(i)
}


// WHILE and DO WHILE


let i = 0

while (i < 5) {
    console.log(i)
    i++
}

do {
    i = prompt('Ingrese un numero: ')
    console.log(i)
} while (parseInt(i))

// SWITCH

let tiempo = prompt('Como esta el tiempo en tu ciudad')

switch (tiempo) {
    case 'lluvioso':
        alert('Lleva Paraguas')
        break
    case 'soleado':
        alert('Comete un chori')
        break
    case 'ventoso':
        alert('No da para asado')
        break
    case 'nevando':
        alert('Saca las birras')
        break
    default:
        alert('Opcion no valida')
        break
}


//

let entrada = prompt('Ingrese un nombre')
let nombre = 'Bart'

if (entrada == nombre) {
    console.log('Fui yo')
} else {
    console.log('Yo no fui')
}

let numeroPersonaje = prompt('Ingrese nro de personaje')

if (numeroPersonaje == 1) {
    console.log('Elegiste a Homero')
} else if (numeroPersonaje == 2) {
    console.log('Elegiste a Marge')
} else if (numeroPersonaje == 3) {
    console.log('Elegiste a Bart')
} else if (numeroPersonaje == 4) {
    console.log('Elegiste a Lisa')
} else if (numeroPersonaje == 5) {
    console.log('Elegiste a Maggie')
} else {
    console.log('Numero incorrecto')
}


let numeroPersonaje = prompt('Ingrese nro de personaje')

switch (numeroPersonaje) {
    case '1':
        alert('Elegiste a Homero')
        break
    case '2':
        alert('Elegiste a Marge')
        break
    case '3':
        alert('Elegiste a Bart')
        break
    case '4':
        alert('Elegiste a Lisa')
        break
    case '5':
        alert('Elegste a Maggie')
        break
    default:
        alert('Opcion no valida')
        break
}

let cantidad = parseInt(prompt("Ingrese cantidad de repeticiones"))

let texto = prompt("Ingrese Texto")

for (let i = 0; i < cantidad; i++) {
    console.log(texto)
}

// Find The Bug

// Actividad 01:
let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let index = 0; index < cantidad; index) {
    console.log(texto);
}

// ¿Qué tiene que hacer este código?
// loggear en la consola el texto cantidad de veces.

// ¿Por qué no cumple con su función?
// index no se esta incrementando en la declaracion del for en la forma index++

    // Actividad 02:
let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
    if (index > 3) {
    }
    alert("lado");
}
// ¿Qué tiene que hacer este código?
// El usuario ingresa cantidad de lados y se muestra una alerta por cada lado. El if cuando index es mayor a 3 no hace nada.
// ¿Por qué no cumple con su función?
// No entiendo la funcion. eventualmente preguntarse que debe suceder a partir de la 4 iteracion.
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?
// Agrear codigo.

// Desafios complementarios 1

numeroIngresado = parseInt(prompt('Ingrese un numero'))

console.log((numeroIngresado % 2 === 0 ? "Es par" : "Es impar"))

// Desafios complementarios 2


