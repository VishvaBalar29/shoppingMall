function addToCart(pid) {
    // Retrieve the existing cart from localStorage (or initialize an empty array if not present)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the product by its ID
    const product = products.find(product => product.id == pid);
    console.log(product);

    if (product) {
        // Get the quantity value from the input field
        var inputQuantity = parseInt(document.getElementById('qty').value);
        console.log("Quantity: " + inputQuantity);

        // Check if the product already exists in the cart
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            // If product already exists in the cart, update the quantity
            cart[existingProductIndex].quantity = inputQuantity;
        } else {
            // If product doesn't exist in the cart, add it as a new entry with the specified quantity
            const productWithQuantity = { ...product, quantity: inputQuantity };
            cart.push(productWithQuantity);
        }

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        confirm("Product Added in Cart")
    } else {
        console.error('Product not found!');
    }
}


