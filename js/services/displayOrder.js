





let orderContent = document.getElementById('orderContent');

let orders = JSON.parse(localStorage.getItem('order')) || [];

orders.forEach(order => {
    let orderItems = order.orderItems;
    let orderAddress = order.address;
    let cardDetails = order.cardDetails;
    
    let orderItemsRows = '';
    let total = 0;
    orderItems.forEach(item => {
        var catname = category.find(cat => item.catId == cat.id);
        total += item.price * item.quantity;
        orderItemsRows += `
            <tr>
                <td><img src="images/${catname.name}/${item.image}" alt=""></td>
                <td>${item.name}</td>
                <td>₹ ${item.price}</td>
                <td>${item.quantity}</td>
            </tr>
        `;
    });

    orderContent.innerHTML += `
        <tr>
            <td>${order.orderId}</td>
            <td>
                <table class="sub-table">
                    <colgroup>
                        <col style="width: 20%;"> 
                        <col style="width: 50%;"> 
                        <col style="width: 15%;"> 
                        <col style="width: 25%;"> 
                    </colgroup>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${orderItemsRows}
                    </tbody>
                    <tfoot>
                            <td colspan="4">
                               <div>    
                                    <strong>Total : &nbsp; &nbsp;₹ ${total}</strong>
                                </div>
                            </td>
                    </tfoot>
                </table>
            </td>
            <td style="text-align: left;padding: 12;">
                <p>${orderAddress.address1}</p>
                <p>${orderAddress.address2}</p>
                <p>City : ${orderAddress.city}</p>
                <p>State : ${orderAddress.state}</p>
            </td>
            <td>${cardDetails.cardnumber}</td>
            <td>${order.orderDate}</td>
        </tr>
    `;
});
