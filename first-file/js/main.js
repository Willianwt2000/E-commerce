const productos = [
  {
    id: "shoes-01",
    titulo: "Nike black",
    imagen: "first-file//img/shoes/01.jpg",
    details: "Future nike,comfort and good price",
    categoria: {
      nombre: "Nike black",
      id: "shoes"
    },
    precio: 160
  },
  {
    id: "shoes-02",
    titulo: "Jordan 11 retro",
    imagen: "first-file//img/shoes/11.jpg",
    details: "quality first and foremost",
    categoria: {
      nombre: "Jordan 11 retro",
      id: "shoes"
    },
    precio: 300
  },
  {
    id: "shoes-03",
    titulo: "Jordan 23",
    imagen: "first-file//img/shoes/10.jpg",
    details: "quality first and foremost",
    categoria: {
      nombre: "Jordan 23",
      id: "shoes"
    },
    precio: 140
  },
  {
    id: "shoes-04",
    titulo: " Black Power nike",
    imagen: "first-file//img/shoes/04.jpg",
    details: "feel the power in your feet",
    categoria: {
      nombre: "Nike black pro",
      id: "shoes"
    },
    precio: 300
  },
  {
    id: "shoes-05",
    titulo: "Jordan 13",
    imagen: "first-file//img/shoes/09.jpg",
    details: "nike",
    categoria: {
      nombre: "Jordan 13",
      id: "shoes"
    },
    precio: 180
  },
  {
    id: "shoes-06",
    titulo: "Jordan 11 gray",
    imagen: "first-file//img/shoes/13.jpg",
    details: "nike",
    categoria: {
      nombre: "Jordan 11 gray",
      id: "shoes"
    },
    precio: 1000
  },
  {
    id: "shoes-7",
    titulo: "Jordan 11 black",
    imagen: "first-file//img/shoes/12.jpg",
    details: "nike",
    categoria: {
      nombre: "Jordan 11 black",
      id: "shoes"
    },
    precio: 2000
  },
  // t-shirt
  {
    id: "camiseta-01",
    titulo: "Camiseta 01",
    imagen: "first-file//img/t-shirt/01.jpg",
    details: "nike",
    categoria: {
      nombre: "T-shirt",
      id: "t-shirt"
    },
    precio: 1000
  },
  {
    id: "camiseta-02",
    titulo: "Camiseta 02",
    imagen: "first-file//img/t-shirt/02.jpg",
    details: "nike",
    categoria: {
      nombre: "T-shirt",
      id: "t-shirt"
    },
    precio: 1000
  },
  {
    id: "camiseta-03",
    titulo: "Camiseta 03",
    imagen: "first-file//img/t-shirt/03.jpg",
    details: "nike",
    categoria: {
      nombre: "T-shirt",
      id: "t-shirt"
    },
    precio: 1000
  },
  {
    id: "camiseta-05",
    titulo: "Camiseta 05",
    imagen: "first-file//img/t-shirt/05.jpg",
    details: "nike",
    categoria: {
      nombre: "T-shirt",
      id: "t-shirt"
    },
    precio: 1000
  },
  {
    id: "camiseta-06",
    titulo: "Camiseta 06",
    imagen: "first-file//img/t-shirt/06.jpg",
    details: "nike",
    categoria: {
      nombre: "T-shirt",
      id: "t-shirt"
    },
    precio: 1000
  },
  {
    id: "camiseta-07",
    titulo: "Camiseta 07",
    imagen: "first-file//img/t-shirt/07.jpg",
    details: "nike",
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
    imagen: "first-file//img/pantalones/01.jpg",
    details: "nike",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones"
    },
    precio: 1000
  },
  {
    id: "pantalon-02",
    titulo: "Pantalón 02",
    imagen: "first-file//img/pantalones/02.jpg",
    details: "nike",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones"
    },
    precio: 1000
  },
  {
    id: "pantalon-03",
    titulo: "Pantalón 03",
    imagen: "first-file//img/pantalones/03.jpg",
    details: "nike",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones"
    },
    precio: 1000
  },
  {
    id: "pantalon-04",
    titulo: "Pantalón 04",
    imagen: "first-file//img/pantalones/04.jpg",
    details: "nike",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones"
    },
    precio: 1000
  },

  // aidors
  {
    id: "aidors-01",
    titulo: "Airdots pro 3",
    imagen: "first-file//img/airdors/01.jpg",
    details: "nike",
    categoria: {
      nombre: "Airdots pro 3",
      id: "airdots"
    },
    precio: 80
  },
  {
    id: "airdot-02",
    titulo: "Airdots pro mini",
    imagen: "first-file//img/airdors/02.jpg",
    details: "nike",
    categoria: {
      nombre: "Airdots pro mini",
      id: "airdots"
    },
    precio: 75
  },
  {
    id: "airdot-03",
    titulo: "Airdots pro 1 white",
    imagen: "first-file//img/airdors/03.jpg",
    details: "nike",
    categoria: {
      nombre: "Airdots pro white",
      id: "airdots"
    },
    precio: 95
  },
  {
    id: "airdot-04",
    titulo: "Airdots red",
    imagen: "first-file//img/airdors/05.jpg",
    details: "nike",
    categoria: {
      nombre: "Airdots red",
      id: "airdots"
    },
    precio: 100
  },
  {
    id: "airdot-05",
    titulo: "Airdots white max",
    imagen: "first-file//img/airdors/04.jpg",
    details: "nike",
    categoria: {
      nombre: "Airdots white max",
      id: "airdots"
    },
    precio: 75
  },

  //Headphone
  {
    id: "headphone-01",
    titulo: "Headphone red",
    imagen: "first-file//img/headphone/01.jpg",
    details: "nike",
    categoria: {
      nombre: "Headphone red",
      id: "headphone"
    },
    precio: 160
  },
  {
    id: "headphone-02",
    titulo: "Headphone red pro",
    imagen: "first-file//img/headphone/02.jpg",
    details: "nike",
    categoria: {
      nombre: "Headphone red pro",
      id: "headphone"
    },
    precio: 150
  },
  {
    id: "headphone-03",
    titulo: "Headphone black",
    imagen: "first-file//img/headphone/03.jpg",
    details: "nike",
    categoria: {
      nombre: "Headphone black",
      id: "headphone"
    },
    precio: 140
  },
  {
    id: "headphone-04",
    titulo: "Headphone black pro",
    imagen: "first-file//img/headphone/04.jpg",
    details: "nike",
    categoria: {
      nombre: "Headphone black pro",
      id: "headphone"
    },
    precio: 125
  },
  {
    id: "headphone-05",
    titulo: "Headphone orange",
    imagen: "first-file//img/headphone/05.jpg",
    details: "nike",
    categoria: {
      nombre: "Headphone orange",
      id: "headphone"
    },
    precio: 180
  },
  //Phone
  {
    id: "phone-01",
    titulo: "Iphone 14 pro max",
    imagen: "first-file//img/phone/01.jpg",
    details: "nike",
    categoria: {
      nombre: "Iphone 14 pro max",
      id: "phone"
    },
    precio: 1000
  },
  {
    id: "phone-02",
    titulo: "Iphone 15 pro max",
    imagen: "first-file//img/phone/02.jpg",
    details: "nike",
    categoria: {
      nombre: "Iphone 15 pro max",
      id: "phone"
    },
    precio: 2000
  },
  {
    id: "phone-03",
    titulo: "Samsung S21 ultra",
    imagen: "first-file//img/phone/09.jpg",
    details: "nike",
    categoria: {
      nombre: "Samsung S21 ultra",
      id: "phone"
    },
    precio: 2000
  },
  {
    id: "phone-04",
    titulo: "Samsung s22 ultra",
    imagen: "first-file//img/phone/11.jpg",
    details: "nike",
    categoria: {
      nombre: "Samsung s22 ultra",
      id: "phone"
    },
    precio: 3000
  },
  //Abrigos
  
  {
    id: "abrigo-01",
    titulo: "Abrigo 01",
    imagen: "first-file//img/abrigos/01.jpg",
    details: "nike",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos"
    },
    precio: 1000
  },
  {
    id: "abrigo-02",
    titulo: "Abrigo 02",
    imagen: "first-file//img/abrigos/02.jpg",
    details: "nike",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos"
    },
    precio: 1000
  },
  {
    id: "abrigo-03",
    titulo: "Abrigo 03",
    imagen: "first-file//img/abrigos/03.jpg",
    details: "nike",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos"
    },
    precio: 1000
  },
  {
    id: "abrigo-04",
    titulo: "Abrigo 04",
    imagen: "first-file//img/abrigos/04.jpg",
    details: "nike",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos"
    },
    precio: 1000
  },
  {
    id: "abrigo-05",
    titulo: "Abrigo 05",
    imagen: "first-file//img/abrigos/05.jpg",
    details: "nike",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos"
    },
    precio: 1000
  },
];

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
