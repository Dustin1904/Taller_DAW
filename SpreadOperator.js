// SPREAD OPERATOR
// Se utiliza para separar o descomponer los elementos de un objeto o array y copiarlos p
// Se utiliza para crear un nuevo array a partir de otro array
// Se utiliza para crear un nuevo objeto a partir de otro objeto

const productosAmazon = {
    Producto : "Videojuego God of War",
    Descripcion : "Un gran juego",
    Precio : 50,
}
const productosAmazon2 = {
    ...productosAmazon,
    Descuento : "No disponible"
}
console.log(productosAmazon2)

// En arrays funcionan de forma similar 
const productosAmazon3 = ["Pantalla","Teclado","Celular"]
const productosAmazon4 = [...productosAmazon3, "Mouse"]
console.log(productosAmazon4)