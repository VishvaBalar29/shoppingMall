function placeOrder() {
    event.preventDefault();
    // alert("Hey we are placing order..");
    
    let order = JSON.parse(localStorage.getItem('order')) || [];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;


    if(cart.length > 0){
        let newOrder = 
        {
            "orderId" : `S${(order.length) + 1}`,
            "orderItems" : cart,
            "address" : {
                "address1" : document.getElementById('address1').value ,
                "address2" : document.getElementById('address2').value ,
                "city" : document.getElementById('city').value ,
                "state" : document.getElementById('state').value ,
                "zip" : document.getElementById('zip').value 
            },
            "cardDetails" : {
                "cardname" : document.getElementById('cardname').value,
                "cardnumber" : document.getElementById('cardnumber').value,
                "expmonth" : document.getElementById('expmonth').value,
                "cvv" : document.getElementById('cvv').value
            },
            "orderDate": formattedDate
        }

        order.push(newOrder);
        localStorage.setItem('order', JSON.stringify(order));
        localStorage.setItem('cart',JSON.stringify([]));
        alert("Thank you your order has been successfully placed.");
        window.location.href = "orderDetails.html";
    }  
    else{
        alert("There is nothing to place order. Please add items to cart before placing order.")
    }
}


