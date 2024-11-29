function getCartItems() {
    // Retrieve the cart from localStorage, or initialize as an empty array if not present
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("hekl");
    if (cart.length === 0) {
        console.log('Cart is empty!');
    } else {
        console.log('Cart items:', cart);

        let container = document.getElementById("cart-left-sec");
        container.innerHTML = '';

        cart.forEach(product => {
            var catname = category.find(cat => product.catId == cat.id);
            let price = product.price * product.quantity;
            container.innerHTML += `<div class="block">
                <div class="img">
                    <img src="images/${catname.name}/${product.image}" alt="">
                </div>
                <div class="details">
                    <p class="name">${product.id}/${product.name}</p>
                    <p class="price" id="price_${product.id}">₹ ${price.toFixed(2)}</p> <!-- Assign unique id here -->
                    <p class="brand">ZARA</p>
                    <div class="quantity">
                        <button class="minusBtn" onclick="sub(event, ${product.id}, ${product.price})">−</button>
                        <input type="text" name="qty" class="qty" id="qty_${product.id}" value="${product.quantity}">
                        <button class="plusBtn" onclick="add(event, ${product.id}, ${product.price})">+</button>
                    </div>
                    <p class="remove" onclick="removeFromCart(${product.id})">Remove</p>
                </div>
            </div>`;
        });

        calculateTotal(cart);
    }
}

getCartItems();

function add(event, productId, unitPrice) {
    let input = document.getElementById(`qty_${productId}`);
    let quantity = parseInt(input.value) + 1;
    input.value = quantity;

    let priceElement = document.getElementById(`price_${productId}`);
    let newPrice = unitPrice * quantity;
    priceElement.innerHTML = `₹ ${newPrice.toFixed(2)}`;
    updateCartQuantity(productId, quantity);
}


function sub(event, productId, unitPrice) {
    let input = document.getElementById(`qty_${productId}`);
    let quantity = parseInt(input.value);
    if (quantity > 0) {
        quantity -= 1;
        input.value = quantity;

        let priceElement = document.getElementById(`price_${productId}`);
        let newPrice = unitPrice * quantity;
        priceElement.innerHTML = `₹ ${newPrice.toFixed(2)}`;
        updateCartQuantity(productId, quantity);
        calculateTotal(cart);
    }
}

function updateCartQuantity(productId, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let product = cart.find(p => p.id === productId);
    if (product) {
        product.quantity = newQuantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    calculateTotal(cart);
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Filter out the product to remove it
    cart = cart.filter(p => p.id !== productId);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Re-render the cart items after removing the product
    getCartItems();
}

function calculateTotal(cart) {
    let total = 0;

    cart.forEach(product => {
        total += product.price * product.quantity;  // Calculate price for each product and add to total
    });

    let totalElement = document.getElementById("cart-total");
    let totalElement2 = document.getElementById("final-total");
    if (totalElement) {
        totalElement.innerHTML = `₹ ${total.toFixed(2)}`;
        totalElement2.innerHTML = `₹ ${total.toFixed(2)}`;
    } else {
        // If there's no total element, create and append it
        let newTotalElement = document.createElement("p");
        newTotalElement.id = "cart-total";
        newTotalElement.innerHTML = `Total: ₹ ${total.toFixed(2)}`;
        document.getElementById("cart-left-sec").appendChild(newTotalElement);
    }
}
