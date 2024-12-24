export function footerFun(){
  let footer = document.getElementsByClassName('footer')[0];
  footer.innerHTML = `<div class="footer-row">
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li><a href="about.html">About Us</a></li>
            <li><a href="feedback.html">Reviews</a></li>
            <li><a href="reviewForm.html">Give a Feedback</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Category</h4>
          <ul class="links">
            <li><a href="products.html?category=1">Fruits & Vegetables</a></li>
            <li><a href="products.html?category=2">Bakery</a></li>
            <li><a href="products.html?category=3">Fashion</a></li>
            <li><a href="products.html?category=4">Beauty</a></li>
            <li><a href="products.html?category=5">Decor</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>SubCategories</h4>
          <ul class="links">
            <li><a href="products.html?category=1&subcat=1">Fresh Fruits</a></li>
            <li><a href="products.html?category=2&subcat=4">Breads & Buns</a></li>
            <li><a href="products.html?category=3&subcat=8">Women Fashion</a></li>
            <li><a href="products.html?category=4&subcat=11">Makeup</a></li>
            <li><a href="products.html?category=4&subcat=12">Skincare</a></li>
            <li><a href="products.html?category=5&subcat=16">Lamps & Lighting</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required>
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div class="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
      </div>`;

}