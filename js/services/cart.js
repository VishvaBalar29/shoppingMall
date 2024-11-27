function getCartItems() {
    // Retrieve the cart from localStorage, or initialize as an empty array if not present
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("hekl");
    if (cart.length === 0) {
        console.log('Cart is empty!');
    } else {
        console.log('Cart items:', cart);

        let container = document.getElementById("table");

        cart.forEach(product => {
            let catname = category.find(cat => product.id = cat.id);

            container.innerHTML += `<p>Product ID: ${product.id}</p>
            <p>name: ${product.name}</p>
            <p>price: ${product.price}</p>
            <p>quantity: ${product.quantity}</p>
            <p>image: ${catname.name}/${product.image}</p>
            <p>subcatid: ${product.subCatId}</p>
            <p>catid: ${product.catId}</p>
            <p>-----------------------------------------------</p`
        });
    }
}

getCartItems();
