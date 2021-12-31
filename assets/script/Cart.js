// create Cart
Document.prototype.appendCart = function (parent) {
  parent ||= this.querySelector("body");
  const cart = document.createElement("aside");
  cart.classList.add("product-cart");
  cart.innerHTML = `
        <div class="product-cart-wrapper">
            <section class="cart-header">
            <div class="close-btn">
                <i class="fas fa-times-circle close-cart"></i>
            </div>
            <h3>Your Cart</h3>
            </section>
            <section class="cart-center">

            </section>
            <section class="cart-footer">
            <p>Your Total: <span class="total-price">$0,00</span></p>
            <button class="btn clear-cart">CLEAR CART</button>
            </section>
        </div>
    `;
  parent.prepend(cart);
};
// add Product to the Cart
Document.prototype.appendProductToCart = function (id) {
  const cart = document.querySelector(".product-cart");
  if (cart) {
    const productsContainer = cart.querySelector(".cart-center");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "products.json", true);
    xhr.send();
    xhr.onload = function () {
      const resp = JSON.parse(xhr.responseText).items;
      const productObj = resp.find((product) => product.id === id);
      const product = document.createElement("article");
      product.classList.add("product");
      product.setAttribute("data-id", productObj.id);
      product.innerHTML = `
      <img src="${productObj.image}" alt="">
      <div class="product-desc">
        <p>${productObj.title}</p>
        <p>${productObj.price}$</p>
        <button class="remove-product">Remove<i class="fas fa-trash"></i></button>
      </div>
      <div class="count-product">
        <i class="fas fa-chevron-up increment-product"></i>
        <span class="product-amount">1</span>
        <i class="fas fa-chevron-down decrement-product"></i>
      </div>
    
    `;
      productsContainer.append(product);
    };
  }
};
