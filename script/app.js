// Definición de objetos de productos
const productos = [
    { id: 1, nombre: "Smartphone", precio: 500 },
    { id: 2, nombre: "Laptop", precio: 1000 },
    { id: 3, nombre: "Tablet", precio: 300 }
];

// Mensajes de bienvenida aleatorios
const mensajesBienvenida = [
    "¡Bienvenido a la mejor tienda de productos electrónicos!",
    "Descubre las últimas novedades en electrónica",
    "Encuentra los gadgets más sorprendentes aquí"
];

// Función para mostrar un mensaje de bienvenida aleatorio
function mostrarMensajeBienvenida() {
    const welcomeMessage = document.getElementById("welcome-message");
    const mensajeAleatorio = mensajesBienvenida[Math.floor(Math.random() * mensajesBienvenida.length)];
    welcomeMessage.textContent = mensajeAleatorio;
}

// Función para crear elementos de producto en el DOM
function crearProductoElement(producto) {
    const productoDiv = document.createElement("div");
    productoDiv.className = "product";
    productoDiv.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p>Precio: $${producto.precio}</p>
        <button class="buy-button" data-product-id="${producto.id}">Comprar</button>
    `;
    return productoDiv;
}

// Agregar productos al contenedor
const productsContainer = document.querySelector(".products-container");
productos.forEach(producto => {
    const productoElement = crearProductoElement(producto);
    productsContainer.appendChild(productoElement);
});

// Manejar la interacción de compra
productsContainer.addEventListener("click", comprarProducto);

// Cambiar mensaje de bienvenida al hacer clic en el botón
const changeWelcomeButton = document.getElementById("change-welcome");
changeWelcomeButton.addEventListener("click", mostrarMensajeBienvenida);

// Función para manejar la compra de un producto
function comprarProducto(event) {
    if (event.target.classList.contains("buy-button")) {
        const productId = parseInt(event.target.getAttribute("data-product-id"));
        const productoComprado = productos.find(producto => producto.id === productId);

        if (productoComprado) {
            const confirmacion = confirm(`¿Deseas comprar un ${productoComprado.nombre} por $${productoComprado.precio}?`);

            if (confirmacion) {
                mostrarMensajeCompraExitosa(productoComprado);
            }
        }
    }
}

// Función para mostrar un mensaje de compra exitosa
function mostrarMensajeCompraExitosa(producto) {
    const mensajeDiv = document.createElement("div");
    mensajeDiv.className = "success-message";
    mensajeDiv.textContent = `¡Has comprado un ${producto.nombre} por $${producto.precio}! Gracias por tu compra.`;

    productsContainer.appendChild(mensajeDiv);

    // Eliminar el mensaje después de unos segundos
    setTimeout(() => {
        productsContainer.removeChild(mensajeDiv);
    }, 5000);
}

// Mostrar un mensaje de bienvenida aleatorio al cargar la página
mostrarMensajeBienvenida();
