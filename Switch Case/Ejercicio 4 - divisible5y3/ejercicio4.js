
let año = parseInt(prompt("Ingrese Numero"));
let numero1 = numero % 3 == 0 && numero % 5 == 0;
switch (true) {
    case (numero1):
        console.log("El numero es divisible entre 3 y 5") 
    break;
    default:
        console.log("El numero no es divisible entre 3 y 5")
    break;
}