
// Crear un array de objetos seleccionados por el usuario a traves de prompt.
// Hacer funcion de suma de los productos seleccionados por el usuario y mostrar el precio total.


// DECLARACION DE VARIABLES GLOBALES 

const precioTshirtBordada = 400
const precioTshirtGrafica = 500
const precioHoodie = 600
const precioGorra = 300



// ARRAY DE PRODUCTOS

const productos = [
    {id: 01, producto: 'Tshirt bordada', precio: precioTshirtBordada},
    {id: 02, producto: 'Tshirt grafica', precio: precioTshirtGrafica},
    {id: 03, producto: 'Hoodie', precio: precioHoodie},
    {id: 04, producto: 'Gorra', precio: precioGorra},
]
console.log(productos)



// MOSTRAR Y SOLICITAR PRODUCTOS AL USUARIO

let agregarCarrito = prompt(`Contamos con los siguientes productos: 
\n${productos[0].producto + ' - ' + ' $' + precioTshirtBordada}
\n${productos[1].producto + ' - ' + ' $' + precioTshirtGrafica}
\n${productos[2].producto + ' - ' + ' $' + precioHoodie}
\n${productos[3].producto + ' - ' + ' $' + precioGorra}
\n Escribe el producto que deseas agregar`)



// CONSTRUCCION DE ARRAY CON PRODUCTOS SELECCIONADOS POR EL USUARIO A TRAVES DE PROMPT

const carrito = []
let finalizarCompra = ''

while (agregarCarrito.toUpperCase() != 'COMPRAR'){

    if(agregarCarrito.toUpperCase() == 'TSHIRT BORDADA'){

        carrito.push(productos[0])
        alert(`¡Has agregado ${productos[0].producto} a tu carrito!`)
        agregarCarrito = prompt(`Escribe otro producto para agregarlo a tu carrito o escribe "Comprar" para finalizar.
        \n${productos[0].producto + ' - ' + ' $' + precioTshirtBordada}
        \n${productos[1].producto + ' - ' + ' $' + precioTshirtGrafica}
        \n${productos[2].producto + ' - ' + ' $' + precioHoodie}
        \n${productos[3].producto + ' - ' + ' $' + precioGorra}`)

    } else if(agregarCarrito.toUpperCase() == 'TSHIRT GRAFICA'){

        carrito.push(productos[1])
        alert(`¡Has agregado ${productos[1].producto} a tu carrito!`)
        agregarCarrito = prompt(`Escribe otro producto para agregarlo a tu carrito o escribe "Comprar" para finalizar.
        \n${productos[0].producto + ' - ' + ' $' + precioTshirtBordada}
        \n${productos[1].producto + ' - ' + ' $' + precioTshirtGrafica}
        \n${productos[2].producto + ' - ' + ' $' + precioHoodie}
        \n${productos[3].producto + ' - ' + ' $' + precioGorra}`)

    } else if(agregarCarrito.toUpperCase() == 'HOODIE'){
        
        carrito.push(productos[2])
        alert(`¡Has agregado ${productos[2].producto} a tu carrito!`)
        agregarCarrito = prompt(`Escribe otro producto para agregarlo a tu carrito o escribe "Comprar" para finalizar.
        \n${productos[0].producto + ' - ' + ' $' + precioTshirtBordada}
        \n${productos[1].producto + ' - ' + ' $' + precioTshirtGrafica}
        \n${productos[2].producto + ' - ' + ' $' + precioHoodie}
        \n${productos[3].producto + ' - ' + ' $' + precioGorra}`)

    } else if(agregarCarrito.toUpperCase() == 'GORRA'){
        
        carrito.push(productos[3])
        alert(`¡Has agregado ${productos[3].producto} a tu carrito!`)
        agregarCarrito = prompt(`Escribe otro producto para agregarlo a tu carrito o escribe "Comprar" para finalizar.
        \n${productos[0].producto + ' - ' + ' $' + precioTshirtBordada}
        \n${productos[1].producto + ' - ' + ' $' + precioTshirtGrafica}
        \n${productos[2].producto + ' - ' + ' $' + precioHoodie}
        \n${productos[3].producto + ' - ' + ' $' + precioGorra}`)

    } else{

        agregarCarrito = prompt(`Los valores ingresados no son válidos, por favor escribe el producto que deseas agregar 
        \n${productos[0].producto + ' - ' + ' $' + precioTshirtBordada}
        \n${productos[1].producto + ' - ' + ' $' + precioTshirtGrafica}
        \n${productos[2].producto + ' - ' + ' $' + precioHoodie}
        \n${productos[3].producto + ' - ' + ' $' + precioGorra}`)

    }

}

console.log(carrito)



// CALCULO DEL PRECIO TOTAL DE PRODUCTOS SELECCIONADOS POR EL USUARIO

let precioFinal = 0

function calculoPrecio(arr, fn){
    
    for (let el of arr){
        fn(el.precio)
    }
}

function sumaPrecios(num) {

    precioFinal += num

}
calculoPrecio(carrito, sumaPrecios)
console.log(`El precio total a pagar es de: `+ precioFinal)
alert(`¡Gracias por tu compra! \n Tu total es de: $` + precioFinal)