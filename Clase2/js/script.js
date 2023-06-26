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

switch (tiempo){
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