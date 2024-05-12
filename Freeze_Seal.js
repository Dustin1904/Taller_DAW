// OBJECT.FREEZE -----------------------------------------------------------------------------
const datosAmazon = {
    nombre: 'Amazon',
    pais: 'Estados Unidos',
    fundacion: 1994,
}
// El metodo freeze se utiliza para convertir un objeto en algo inmutable o ineditable
Object.freeze(datosAmazon)
datosAmazon.nombre="Hola xd"
datosAmazon.pais="Mi hermoso Ecuador"
datosAmazon.fundacion=2024
console.log(datosAmazon);


// OBJECT.SEAL ------------------------------------------------------------------------------
const ofertasAmazon = {
    producto : "PC Gamer",
    Año : 2024,
    precio : 2000,
    PrecioOferta : 1000
}
// El metodo seal se utiliza para convertir un objeto en algo casi inmutable, la diferencia es que este metodo si permite la edicion o modificacion de las propiedades existentes dentro del objeto o array
Object.seal(ofertasAmazon)
delete ofertasAmazon.producto // NO permite realizar esta accion
ofertasAmazon.nuevoDato = "Hola xd" // NO permite realizar esta accion
ofertasAmazon.producto="PC Gamer 2" // Permite realizar esta accion 
ofertasAmazon.Año=2025
ofertasAmazon.precio=3000
ofertasAmazon.PrecioOferta=1500
console.log(ofertasAmazon);