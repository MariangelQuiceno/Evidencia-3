
let contraseña = prompt("Ingrese contraseña");
let contraseñaV1 = contraseña >= 8 && contraseña <= 15 &&  contraseña.includes(" ")  ;
switch (true) {
    case (contraseñaV1):
        console.log("La contraseña es valida") 
    break;
    default:
        console.log("La contraseña no es valida")
    break;
}