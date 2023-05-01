const productos = [
    {
        nombre: "pantalon verde",
        precio: 1390
    },
    {
        nombre: "pantalon rosado",
        precio: 1390
    },
    {
        nombre: "short celeste",
        precio: 1190
    },

    {
        nombre: "remera multicolor",
        precio: 890
    },
    {
        nombre: "buzo oversize",
        precio: 990
    }
]

let terminar = "N";

while ((terminar !== "S") & (terminar !=="")){
    let ingreso = (prompt("Ingrese la prenda que desea")).toLowerCase()
    const busquedaProductos = productos.filter((producto) => producto.nombre.includes(ingreso))
    if ((busquedaProductos.length !== 0) & (ingreso !== "")){
        let resultado = "Las prendas dentro de su búsqueda son: "
        console.log(busquedaProductos)
        busquedaProductos.forEach((producto, index) => {
            if (index !== 0) {
                resultado = resultado + ", "
            }
            resultado = resultado + producto.nombre
        }
        )
        alert(resultado)
    } else {
        alert("El producto ingresado no es válido")
    }
    terminar = (prompt("Desea terminar su busqueda? S/N")).toUpperCase()
}



