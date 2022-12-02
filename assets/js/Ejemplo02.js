let nombre = "Denny"
let apellido = "Herrera"
let edad = 32
let correo = "denny.herrera@kodigo.org"

//let mensaje = "Nombre: " + nombre + '\nApellido: ' + apellido + "\nEdad: " + edad + "\nCorreo: " + correo
let mensaje = `Nombre: ${nombre}\nApellido: ${apellido}\nEdad: ${edad}\nCorreo: ${correo}`

console.log(mensaje)

console.log(nombre.length)

let saludo = "hola"
console.log(saludo, typeof(saludo))

saludo = 5
console.log(saludo, typeof(saludo), saludo+saludo)

let condicion = typeof(saludo)=="number"
console.log(condicion, typeof(condicion))

// undefined
let variable
console.log(typeof(variable))

let nombre2 = null
console.log(nombre2, typeof(nombre2))