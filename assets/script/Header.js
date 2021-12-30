Document.prototype.appendHeader = function (parent) {
  parent = parent || this.querySelector("body");
  const header = document.createElement("header");
  header.innerHTML = `

  <div class="header-top">
    <div class="container">
      <div class="toggle-links-btn">
        <i class="fas fa-bars toggle-links"></i>
      </div>
      <div class="logo">
        <a href="index.html">  
      <img
          src="assets/images/logo.svg"
          alt="Comfy House LOGO"
          class="logo"
        />
        </a>
      </div>
        <div class="toggle-cart-btn">
          <span class="number-of-products">0</span>
          <i class="fas fa-cart-plus open-cart"></i>
        </div>
      </div>
    </div>
  </div>
  <!-- nav -->
  <nav>
  <ul class="nav-links">
      <li>
        <a href="about.html">About</a>
      </li>
      <li>
        <a href="products.html">Products</a>
      </li>
  </ul>
</nav>
  <!-- end nav -->

  `;
  parent.prepend(header);
};
