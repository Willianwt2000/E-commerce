let productos = [];

fetch("/first-file/js/productos.json") 
  .then(response => response.json())
  .then(data => {
    productos = data;
    cargarProductos(productos);
  });
// //llamando a contenedor productos
const contenedorProductos = document.querySelector(".wrapperrr");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito")

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML ="";

  productosElegidos.forEach(producto => {
    let div = document.createElement("div")
    div.classList.add("card")

    //creamos el html de los productos
    div.innerHTML +=`  
<img src="${producto.imagen}" alt="${producto.titulo}">
<div class="content">
  <div class="row">
      <div class="details">
          <span>${producto.titulo}</span>
          <p>${producto.details}.</p>
      </div>
      <div class="price">${producto.precio}</div>
  </div>
<div class="buttons">
  <button class="producto-agregar" id="${producto.id}">Agregar</button>
  <button>more details</button>
</div>
`
    contenedorProductos.append(div);
  });
  actualizarBotonesAgregar();
}

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach(boton => {boton.classList.remove("active")});
    e.currentTarget.classList.add("active");
    if (e.currentTarget.id !== "todos") {
      const productosCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
      tituloPrincipal.innerText = productosCategoria.categoria.nombre;
      console.log(productosCategoria)
      const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
      console.log("Productos filtrados:", productosBoton);
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
let productosEnCarrito;
const productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito()
} else {
  productosEnCarrito = [];
}


function agregarAlcarrito(e) {
  Toastify({
    text: "producto agregado",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, rgb(38, 49, 74), #785ce9)",
      borderRadius: "2rem",
      textTransform: 'upperCase'
    },
    offset: {
      x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    
    onClick: function(){} // Callback after click
  }).showToast();

  const idBoton = e.currentTarget.id;
  const productosAgregado = productos.find(producto => producto.id === idBoton)

  if (productosEnCarrito.some(producto => producto.id === idBoton )) {
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
    productosEnCarrito[index].cantidad++
  } else {
    productosAgregado.cantidad = 1;
    productosEnCarrito.push(productosAgregado)
  }
  actualizarNumerito();
  //GUARDAR ESTE ARRAY---const productosEnCarritos = [];--- EN EL LOCAL STORAGE PARA LLEVARLO AL CARRITO
  localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
}
//Funcion para actualizar numerito

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}

/*
<div class="card">
<img src="first-file//img/pantalones/03.jpg" alt="black headphone">
<div class="content">
    <div class="row">
        <div class="details">
            <span>Headphone</span>
            <p>Premium headphone</p>
        </div>
        <div class="price">$30</div>
    </div>
    <div class="buttons">
        <button>Add to Cart</button>
        <button>more details</button>
    </div>
</div>
</div>**/
