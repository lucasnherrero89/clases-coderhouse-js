let nombre = prompt("Ingrese su nombre: ")
let apellido = prompt("Ingrese su Apellido: ")
let nacimiento = parseInt(prompt("Ingrese su fecha de nacimiento"))
let edad_en_2050 = 2050 - nacimiento

console.log("Su nombre es " + nombre + " " + apellido)
alert("Usted tendra " + edad_en_2050  + " años en 2050")
