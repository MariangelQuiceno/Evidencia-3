console.log("Ingrese el valor")
let valor = prompt("")
let valorFlotante = parseFloat(valor)
let IVA = 0.19
let IVAFlotante = parseFloat(IVA)
let precioFinal = valorFlotante * IVAFlotante + valorFlotante
console.log("El precio con el 19% de IVA es",precioFinal)
