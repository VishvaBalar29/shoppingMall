function checkValidation(event) {
    // Prevent form submission
    event.preventDefault();
    console.log("checkdlk");
    
    // Get form values
    const address1 = document.getElementById("address1").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const zip = document.getElementById("zip").value.trim();
    const cardName = document.getElementById("cardname").value.trim();
    const cardNumber = document.getElementById("cardnumber").value.trim();
    const expMonthYear = document.getElementById("expmonth").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const error = document.getElementById("error");

    // Regex for validation
    const zipRegex = /^\d{6}(-\d{4})?$/; // US Zip code
    const cardNumberRegex = /^\d{16}$/; // 16-digit card number
    const expMonthYearRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
    const cvvRegex = /^\d{3}$/; // 3 or 4 digit CVV

    if (!address1) {
        error.innerHTML = "*Address is required";
    }
    else if (!city) {
        error.innerHTML = "*City is required.";
    }
    else if (!state) {
        error.innerHTML = "*State is required.";
    }
    else if (!zip || !zipRegex.test(zip)) {
        error.innerHTML = "*Please enter a valid Zip Code.";
    }
    else if (!cardName) {
        error.innerHTML = "*Name on card is required.";
    }
    else if (!cardNumber || !cardNumberRegex.test(cardNumber)) {
        error.innerHTML = "*Please enter a valid 16-digit Credit Card Number.";
    }
    else if (!expMonthYear || !expMonthYearRegex.test(expMonthYear)) {
        error.innerHTML = "*Please enter the Expiration Date in MM/YY format.";
    }
    else if (!cvv || !cvvRegex.test(cvv)) {
        error.innerHTML = "*Please enter a valid CVV (3 or 4 digits).";
    }
    else{
        placeOrder(event);
    }
}

function placeOrder(event) {
    event.preventDefault();
    
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
            "orderId" : `O${(order.length) + 1}`,
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
        window.location.href = "confirm.html";
    }  
    
}


