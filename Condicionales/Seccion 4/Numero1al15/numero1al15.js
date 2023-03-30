// Pedir al usuario que ingrese un número
let numero = parseInt(prompt("Ingrese un número entre 1 y 15"));

// Comprobar si el número es primo o no
let esPrimo = true;

if (numero < 2) {
  esPrimo = false;
} else {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
}

// Mostrar el resultado
if (esPrimo) {
  console.log(numero + " es un número primo");
} else {
  console.log(numero + " no es un número primo")
}