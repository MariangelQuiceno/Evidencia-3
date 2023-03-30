let numero = parseFloat(prompt("Ingrese un numero"));
let numeroDivisible = numero % 5 == 0
switch (true) {
    case numeroDivisible:
        console.log("El numero es divisible entre 5")
    break;
    default:
        console.log("El numero no es divisible entre 5")
    break;
}