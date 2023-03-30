console.log("Ingrese un numero")
let numero = prompt()
let numeroFlotante = parseFloat(numero)
if (numeroFlotante % 5 == 0){
    console.log("Es divisible entre 5")
}else{
    console.log("No es divisible entre 5")
}