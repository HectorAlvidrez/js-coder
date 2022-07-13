let palabra = prompt("Ingresa UNA palabra que quieras mostrar.")

let oracion = ""

let espacio = " "

while(palabra != "ESC"){

    oracion += palabra + espacio

    alert("La palabra que ingresaste es: "+ palabra)

    palabra = prompt("Ingresa otra palabra para formar una oración o escribe `ESC` para terminar")
}

alert(`La oración que formaste fue: ${oracion}`)
console.log(oracion)
