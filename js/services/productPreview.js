function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
const pid = getQueryParam('pid');
var productData = products.filter(product => product.id== pid);
console.log(productData);


var container = document.getElementById('product-preview');
var filteredCategory = category.find(cat => cat.id == productData[0].catId);
console.log(productData[0].catId);
    container.innerHTML += `
            <div class="left-sec">
            <img src="images/${filteredCategory.name}/${productData[0].image}" alt="">
        </div>
        <div id="right-sec">
            <p class="brand">${filteredCategory.name}</p>
            <p class="name">${productData[0].name}</p>
            <p class="desc">${productData[0].desc}</p>
            <p class="price">₹ ${productData[0].price}    
            ${productData[0].catId == 1 ? 
                `<span style="font-size: 17px;color: gray;font-weight: 400;">per 1Kg</span>` : ""}
            </p>
            ${productData[0].catId==3 ?  
                `<div class="size">
                <span>size : </span>
                <button>XS</button>
                <button>S</button>
                <button>L</button>
                <button>XL</button>
                <button>XLL</button>
            </div>` : ""}
            <div style="margin-top: 40px;margin-left: 33px;"> 
            <div class="quantity">
                <button id="minusBtn" onclick="sub()">−</button>
                <input type="text" name="qty" id="qty" value="0">
                <button id="plusBtn" onclick="add()">+</button>
            </div>
            <button class="AddToCart" onclick="addToCart(${productData[0].id})">Add to Cart</button>
        </div>  
         </div>
    `;


var input = document.getElementById('qty');
function add(){
    input.value = parseInt(input.value) + 1;
}
function sub(){
    if(input.value > 0){
        input.value = parseInt(input.value) - 1;
    }
}