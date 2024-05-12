// THIS ----------------------------------------------------
// Esta palabra clave se utiliza para llamar a un elemento de algun objeto o array dentro del conexto en el que está trabajando dicho elemento

/*const InfoAamazon = {
    nombre: "Amazon",
    pais: "Estados Unidos",
    sitioWeb: "https://www.amazon.com",
    presentacion : function (){
        console.log(`El sitio web ${nombre} es un sitio web de comercio electrónico que ofrece una amplia variedad de productos y servicios, vista la pagina en ${sitioWeb}`)
    }
}
InfoAamazon.presentacion() // En este caso imprimirá un error, ya que la funcion no encuentra ningun elemento llamado "nombre" o "sitioWeb"*/

// La forma correcta de hacer es: 
const InfoAamazon = {
    nombre: "Amazon",
    pais: "Estados Unidos",
    sitioWeb: "https://www.amazon.com",
    presentacion : function (){
        console.log(`El sitio web ${this.nombre} es un sitio web de comercio electrónico que ofrece una amplia variedad de productos y servicios, visítanos en nuestra página web: ${this.sitioWeb}`)
    }
}
InfoAamazon.presentacion() // En este caso imprime el mensaje de presentación