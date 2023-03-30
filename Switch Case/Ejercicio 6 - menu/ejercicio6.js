
let menu = prompt("Ingrese 'Menu' Para mostrar el Menu")
console.log("Este es el Menu, seleccione una opción de comida:");
console.log("1. Papas Fritas");
console.log("2. Helado");
console.log("3. Pizza");

const opcion = parseInt(prompt("Ingrese el número de la opción seleccionada:"));

switch (opcion) {
  
    case menu: 
    console.log("Seleccione una opción de comida:");
    console.log("1. Papas Fritas");
    console.log("2. Helado");
    console.log("3. Pizza");
  case 1:
    console.log("Ha seleccionado las Papas Fritas");
  break;
  case 2:
    console.log("Ha seleccionado el Helado");
  case 3:
    console.log("Ha seleccionado la Pizza");
  break;
  default:
    console.log("Opción inválida");
  break;
}