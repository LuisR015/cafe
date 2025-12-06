// Productos del menú
const menu = [
    { nombre: "Café Americano", precio: 35, img: "images/cafeteria1.jpg" },
    { nombre: "Latte", precio: 45, img: "images/cafeteria1.jpg" },
    { nombre: "Capuchino", precio: 50, img: "images/cafeteria1.jpg" },
    { nombre: "Moka", precio: 55, img: "images/cafeteria1.jpg" }
];

// Render Menú
const menuContainer = document.getElementById("menu-container");
menu.forEach(prod => {
    const item = document.createElement("div");
    item.className = "menu-item";
    item.innerHTML = `
        <img src="${prod.img}">
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio}</p>
        <button class="add-btn">Agregar</button>
    `;
    item.querySelector(".add-btn").addEventListener("click", () => addToCart(prod));
    menuContainer.appendChild(item);
});

// Carrito
let cart = [];
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeModal = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

cartBtn.onclick = () => cartModal.style.display = "flex";
closeModal.onclick = () => cartModal.style.display = "none";

function addToCart(product){
    cart.push(product);
    updateCart();
}

function updateCart(){
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, i) => {
        total += item.precio;
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total;
    cartCount.textContent = cart.length;
}
