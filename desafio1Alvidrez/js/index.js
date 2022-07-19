
// Agregar X cantidad de productos para obtener diferentes descuentos sobre el total:

// Descuentos aplican a un maximo de 5 productos:
// 2 productos: 10%
// 3 prtoductos: 15%
// 4 productos: 30%
// 5 productos: 50%

// Calcular el precio total con respecto al descuento y la cantidad de productos agregados.




// DECLARACIÓN DE VARIABLES GLOBALES

let cantidadProductos = parseInt(prompt("¡Tenemos descuentos en la compra de 2 a 5 productos! ¿Cuántos productos deseas agregar? (Aún no se te cobrará)."))

console.log(`El cliente eligió ${cantidadProductos} productos`)


const precioProducto = 499

console.log("El precio por producto es de: $" + precioProducto)


let descuento = 0

let finalizarCompra = ""



// CICLO DE DESCUENTOS Y COMPRA

while(finalizarCompra != "COMPRAR"){
    
    if(cantidadProductos == 1) {
        
        descuento = 0
        finalizarCompra = prompt(`Solo agregaste 1 producto, por lo que no obtuviste ningún descuento. Escribe COMPRAR para terminar.`)

    } else if(cantidadProductos == 2) {

        descuento = 99
        finalizarCompra = prompt(`¡Obtuviste $99 pesos de descuento! Escribe COMPRAR para terminar.`)

    } else if(cantidadProductos == 3) {

        descuento = 150
        finalizarCompra = prompt(`¡Obtuviste $150 pesos de descuento! Escribe COMPRAR para terminar.`)

    } else if(cantidadProductos == 4) {

        descuento = 250
        finalizarCompra = prompt(`¡Obtuviste $250 pesos de descuento! Escribe COMPRAR para terminar.`)

    } else if(cantidadProductos == 5) {

        descuento = 499
        finalizarCompra = prompt(`¡Obtuviste $499 pesos de descuento! Escribe COMPRAR para terminar.`)

    } else if(cantidadProductos > 5) {

        descuento = 0
        finalizarCompra = prompt(`Nuestros descuentos aplican a un máximo de 5 productos, por lo que no obtuviste ningún descuento. Escribe COMPRAR para terminar.`)


    } else {

        descuento = 0
        cantidadProductos = prompt("¡Ese no es un número válido! Por favor ingresa un número válido para continuar.")

    }
}

console.log("El descuento es de: $" + descuento)



// FUNCIÓN: CÁLCULO DEL PRECIO TOTAL

function calculoPrecio() {

    let sumaPrecio = precioProducto*cantidadProductos - descuento

    return sumaPrecio

}

let precioFinal = calculoPrecio()

console.log("El precio final es de: " + precioFinal)
alert("¡Gracias por tu compra! El total es de: $" + precioFinal)