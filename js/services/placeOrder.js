function checkValidation(event) {
    event.preventDefault();
    console.log("checkdlk");
    
    
    const address1 = document.getElementById("address1").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const zip = document.getElementById("zip").value.trim();
    const cardName = document.getElementById("cardname").value.trim();
    const cardNumber = document.getElementById("cardnumber").value.trim();
    const expMonthYear = document.getElementById("expmonth").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    
    const addErr = document.getElementById('addErr');
    const cityErr = document.getElementById('cityErr');
    const stateErr = document.getElementById('stateErr');
    const zipErr = document.getElementById('zipErr');
    const nameErr = document.getElementById('nameErr');
    const numErr = document.getElementById('numErr');
    const expErr = document.getElementById('expErr');
    const cvvErr = document.getElementById('cvvErr');

    addErr.innerHTML = "";
    cityErr.innerHTML = "";
    stateErr.innerHTML = "";
    zipErr.innerHTML = "";
    nameErr.innerHTML = "";
    numErr.innerHTML = "";
    expErr.innerHTML = "";
    cvvErr.innerHTML = "";

    const zipRegex = /^\d{6}(-\d{4})?$/; 
    const cardNumberRegex = /^\d{16}$/; 
    const expMonthYearRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; 
    const cvvRegex = /^\d{3}$/; 

    if (!address1) {
        addErr.innerHTML = "*Address is required";
    }
    else if (!city) {
        cityErr.innerHTML = "*City is required.";
    }
    else if (!state) {
        stateErr.innerHTML = "*State is required.";
    }
    else if (!zip || !zipRegex.test(zip)) {
        zipErr.innerHTML = "*Please enter a valid Zip Code.";
    }
    else if (!cardName) {
        nameErr.innerHTML = "*Name on card is required.";
    }
    else if (!cardNumber || !cardNumberRegex.test(cardNumber)) {
        numErr.innerHTML = "*Please enter a valid 16-digit Credit Card Number.";
    }
    else if (!expMonthYear || !expMonthYearRegex.test(expMonthYear)) {
        expErr.innerHTML = "*Please enter the Expiration Date in MM/YY format.";
    }
    else if (!cvv || !cvvRegex.test(cvv)) {
        cvvErr.innerHTML = "*Please enter a valid CVV (3 or 4 digits).";
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
        window.location.href = "confirm.html";
    }     
}


