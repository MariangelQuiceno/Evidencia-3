
let texto = prompt("Inserte una oracion o texto")
let textoV = texto.includes("ADSO") && texto.includes("desarrolladores")
switch (true) {
    case (textoV):
        console.log("Contiene la palabra 'Adso' y 'desarrolladores' ")
    break;
    default: 
    console.log("No contiene la palabra 'Adso' y 'desarrolladores' ")
    break;
}













