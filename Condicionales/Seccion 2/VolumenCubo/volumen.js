console.log("Ingrese la medida de uno de los lados del cubo");
let lado = prompt()
let ladoFlotante = parseFloat(lado)
let altura = ladoFlotante
let ancho = ladoFlotante
let base = ladoFlotante
let volumen = altura * ancho * base 
console.log("El volumen del cubo es",volumen);
