function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}
function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}
function changeQuantity(index, delta) {
    let cart = getCart();
    cart[index].cartQuantity += delta;
    if (cart[index].cartQuantity < 1) cart[index].cartQuantity = 1;
    saveCart(cart);
    renderCart();
}
function renderCart() {
    const cart = getCart();
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    if (cart.length === 0) {
        cartItems.innerHTML = `<div class="empty-cart">Your cart is empty.</div>`;
        cartTotal.textContent = "";
        return;
    }
    let total = 0;
    cartItems.innerHTML = "";
    cart.forEach((item, idx) => {
        // Extract numeric price
        const priceNum = parseInt(item.price.replace(/[^\d]/g, ''));
        total += priceNum * (item.cartQuantity || 1);
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-details">
                    <strong>${item.name}</strong><br>
                    Price: ${item.price}<br>
                    Quantity: ${item.cartQuantity || 1}
                </div>
                <div class="cart-actions">
                    <button onclick="changeQuantity(${idx}, -1)">-</button>
                    <button onclick="changeQuantity(${idx}, 1)">+</button>
                    <button onclick="removeItem(${idx})">Remove</button>
                </div>
            </div>
        `;
    });
    cartTotal.textContent = `Total: ₹${total.toLocaleString()}/-`;
}
window.changeQuantity = changeQuantity;
window.removeItem = removeItem;
window.onload = renderCart;