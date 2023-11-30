const productos = [
{
    id: "abrigo-01",
    titulo: "Abrigo 01",
    imagen: "./img/abrigos/01.jpg",
    categoria: {
        nombre: "Abrigos",
        id: "abrigos"
    },
    precio: 1000
},
{
    id: "abrigo-02",
    titulo: "Abrigo 02",
    imagen: "./img/abrigos/02.jpg",
    categoria: {
        nombre: "Abrigos",
        id: "abrigos"
    },
    precio: 1000
},
{
    id: "abrigo-03",
    titulo: "Abrigo 03",
    imagen: "./img/abrigos/03.jpg",
    categoria: {
        nombre: "Abrigos",
        id: "abrigos"
    },
    precio: 1000
},
{
    id: "abrigo-04",
    titulo: "Abrigo 04",
    imagen: "./img/abrigos/04.jpg",
    categoria: {
        nombre: "Abrigos",
        id: "abrigos"
    },
    precio: 1000
},
{
    id: "abrigo-05",
    titulo: "Abrigo 05",
    imagen: "./img/abrigos/05.jpg",
    categoria: {
        nombre: "Abrigos",
        id: "abrigos"
    },
    precio: 1000
},
// t-shirt
{
    id: "camiseta-01",
    titulo: "Camiseta 01",
    imagen: "./img/t-shirt/01.jpg",
    categoria: {
        nombre: "T-shirt",
        id: "t-shirt"
    },
    precio: 1000
},
{
    id: "camiseta-02",
    titulo: "Camiseta 02",
    imagen: "./img/t-shirt/02.jpg",
    categoria: {
        nombre: "T-shirt",
        id: "t-shirt"
    },
    precio: 1000
},
{
    id: "camiseta-03",
    titulo: "Camiseta 03",
    imagen: "./img/t-shirt/03.jpg",
    categoria: {
        nombre: "T-shirt",
        id: "t-shirt"
    },
    precio: 1000
},
{
    id: "camiseta-04",
    titulo: "Camiseta 04",
    imagen: "./img/t-shirt/04.jpg",
    categoria: {
        nombre: "T-shirt",
        id: "t-shirt"
    },
    precio: 1000
},
{
    id: "camiseta-05",
    titulo: "Camiseta 05",
    imagen: "./img/t-shirt/05.jpg",
    categoria: {
        nombre: "T-shirt",
        id: "t-shirt"
    },
    precio: 1000
},
{
    id: "camiseta-06",
    titulo: "Camiseta 06",
    imagen: "./img/t-shirt/06.jpg",
    categoria: {
        nombre: "T-shirt",
        id: "t-shirt"
    },
    precio: 1000
},
{
    id: "camiseta-07",
    titulo: "Camiseta 07",
    imagen: "./img/t-shirt/07.jpg",
    categoria: {
        nombre: "T-shirt",
        id: "t-shirt"
    },
    precio: 1000
},
{
    id: "camiseta-08",
    titulo: "Camiseta 08",
    imagen: "./img/t-shirt/08.jpg",
    categoria: {
        nombre: "T-shirt",
        id: "t-shirt"
    },
    precio: 1000
},
// Pantalones
{
    id: "pantalon-01",
    titulo: "Pantalón 01",
    imagen: "./img/pantalones/01.jpg",
    categoria: {
        nombre: "Pantalones",
        id: "pantalones"
    },
    precio: 1000
},
{
    id: "pantalon-02",
    titulo: "Pantalón 02",
    imagen: "./img/pantalones/02.jpg",
    categoria: {
        nombre: "Pantalones",
        id: "pantalones"
    },
    precio: 1000
},
{
    id: "pantalon-03",
    titulo: "Pantalón 03",
    imagen: "./img/pantalones/03.jpg",
    categoria: {
        nombre: "Pantalones",
        id: "pantalones"
    },
    precio: 1000
},
{
    id: "pantalon-04",
    titulo: "Pantalón 04",
    imagen: "./img/pantalones/04.jpg",
    categoria: {
        nombre: "Pantalones",
        id: "pantalones"
    },
    precio: 1000
},
{
    id: "pantalon-05",
    titulo: "Pantalón 05",
    imagen: "./img/pantalones/05.jpg",
    categoria: {
        nombre: "Pantalones",
        id: "pantalones"
    },
    precio: 1000
}
];

//llamando a contenedor productos
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito")

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

productosElegidos.forEach(producto => {
    let div = document.createElement("div")
    div.classList.add("producto")
    //creamos el html de los productos
    div.innerHTML += `
    <img class="producto-img" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="producto-detalle">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
    </div>
    `;

    contenedorProductos.append(div);
});

actualizarBotonesAgregar();

}

cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => {boton.classList.remove("active")});
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id !== "todos") {
            const productosCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productosCategoria.categoria.nombre;
            console.log(productosCategoria)
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton)
        }else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos);
        }
    })
});


//actualizar productos --aGREGAR PRODUCTOS AL CARRITO

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlcarrito);
    });
}

const productosEnCarritos = [];
function agregarAlcarrito(e) {
    const idBoton = e.currentTarget.id;
    const productosAgregado = productos.find(producto => producto.id === idBoton)

    if (productosEnCarritos.some(producto => producto.id === idBoton )) {
        const index = productosEnCarritos.findIndex(producto => producto.id === idBoton)
        productosEnCarritos[index].cantidad++
    } else {
        productosAgregado.cantidad = 1;
        productosEnCarritos.push(productosAgregado)
    }
    actualizarNumerito();
    //GUARDAR ESTE ARRAY---const productosEnCarritos = [];--- EN EL LOCAL STORAGE PARA LLEVARLO AL CARRITO
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarritos));
}
//Funcion para actualizar numerito

function actualizarNumerito() {
    let nurvoNumerito = productosEnCarritos.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nurvoNumerito
}
/* <div class="productos">
<img class="producto-img" src="./img/abrigos/01.jpg" alt="">
<div class="producto-detalle">
    <h3 class="producto-titulo">Abrigo 01</h3>
    <p class="producto-precio">$1000</p>
    <button class="producto-agregar">Agregar</button>
</div>
</div> */