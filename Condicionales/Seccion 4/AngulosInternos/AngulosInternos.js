let angulo1 = parseFloat(prompt("Inserte el primer angulo interno"))
let angulo2 = parseFloat(prompt("Inserte el segundo angulo interno"))
let angulo3 = parseFloat(prompt("Inserte el tercer angulo interno"))
const angulointerno = 180
let angulosinternoFloat = parseFloat(angulosinterno)
if(angulo1 + angulo2 + angulo3 == angulosinternoFloat){
    console.log("La suma de los angulos corresponden a un triangulo")
}else{   console.log("La suma de los angulos no corresponden a un triangulo")
}