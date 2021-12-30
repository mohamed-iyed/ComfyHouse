Document.prototype.appendProduct = function (
  elem,
  { id, title, price, image }
) {
  elem ||= this.querySelector("body");
  const product = document.createElement("article");
  product.classList.add("product");
  product.setAttribute("data-id", id);
  product.innerHTML = `
            <div class="product-img">
              <img src="${image}" alt="" />
              <span class="state">Add to cart<i class="fas fa-shopping-cart add-product"></i></span>
            </div>
            <p class="product-name">${title}</p>
            <p class="product-price">${price}$</p>
        `;
  elem.append(product);
};
