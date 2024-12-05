let orderContent = document.getElementById('orderContent');

let orders = JSON.parse(localStorage.getItem('order')) || [];

orders.forEach(order => {
    orderContent.innerHTML += `
        <tr>
            <td>${order.orderId}</td>
            <td>${JSON.stringify(order.address)}</td>
            <td>${JSON.stringify(order.orderItems)}</td>
            <td>${JSON.stringify(order.cardDetails)}</td>
            <td>${JSON.stringify(order.orderDate)}</td>
        </tr>
    `;
});