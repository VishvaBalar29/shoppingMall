import { footerFun } from '../services/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    footerFun();
});

export function navbarFun(){
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let navbar = document.getElementsByClassName('navbar')[0];
navbar.innerHTML = `<nav>
            <div class="logo" style=" display: flex;align-items: center;">
                <a href="index.html">
                     <img id="logo" src="images/Home/logo.png" alt="">
                </a>
            </div>

            <div>
                <ul id="menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="products.html?category=1">Fruits & Vegetables</a></li>
                    <li><a href="products.html?category=2">Bakery</a></li>
                    <li><a href="products.html?category=3">Fashion</a></li>
                    <li><a href="products.html?category=4">Beauty</a></li>
                    <li><a href="products.html?category=5">Decor</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="feedback.html">Review</a></li>
                </ul>
            </div>

            <div class="right-sec">
                <div>
                    <input type="text" placeholder="Search...">
                </div>
                <div>
                    <a href="cart.html" id="cart-icon"><i class="fa-solid fa-cart-shopping"></i><a>
                </div>
                <div id="iconDropdown">
                    <i class="fas fa-user"> </i>                   
                    <div id="iconDropdownContent">
                        ${currentUser ? 
                       `
                        <a href="profile.html">Profile</a>
                        <a href="signup.html">SignUp</a>`
                        
                        : 
                        `<a href="login.html">Login</a>
                        <a href="signup.html">SignUp</a>`
                        }
                    </div>
                </div>
            </div>
        </nav>`;
}
navbarFun();