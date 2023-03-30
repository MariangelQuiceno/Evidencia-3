let numero = parseFloat(prompt("Ingrese un numero"));
let numeroPar = numero % 2 == 0
switch (true) {
    case numeroPar:
        console.log("El numero es Par")
    break;
    default:
        console.log("El numero no es par")
    break;
}