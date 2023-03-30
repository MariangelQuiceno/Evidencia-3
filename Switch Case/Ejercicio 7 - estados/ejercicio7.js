//Crea una aplicación que tenga varios estados y permita al usuario cambiar entre ellos.
//Utiliza switch para cambiar el estado actual de la aplicación y ejecutar diferentes acciones en
//función del estado actual. Por ejemplo, si la aplicación está en modo "edición", permite al
//usuario editar los datos, pero si está en modo "visualización", muestra los datos sin permitir
//la edición.



let nombre = prompt("Ingrese su Nombre");
let edad = parseInt(prompt("Ingrese su edad"));
let estado = prompt("Escriba 'v' para visualizar o 'e' para editar");

switch (estado) {
  case "v":
    console.log("Su nombre es",nombre)
    console.log("Su edad es",edad)
    break;

  case "e":
    nombre = prompt("Ingrese su Nombre");
    edad = prompt("Ingrese su Edad");
    console.log("su nombre es",nombre)
    console.log("Su edad es",edad)
    break;

  default:
    console.log("Seleccione una opcion valida")
    break;
}

