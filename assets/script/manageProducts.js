// change Text of the product
function changeText(id, updateFlag) {
  const productsContianer = document.querySelector(".products-container");
  const elem = productsContianer.querySelector(`[data-id="${id}"]`);
  if (elem) {
    const state = elem.querySelector(".state");
    if (updateFlag) {
      state.innerHTML = "Added to the Cart";
    } else {
      state.innerHTML = "Add to cart <i class='fas fa-shopping-cart'></i>";
    }
  }
}
// new totle Price
function calcTotelPrice() {
  const products = JSON.parse(localStorage.getItem("products"));
  const productsKeys = Object.keys(products);
  const totlePrice = document.querySelector(".total-price");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "products.json", true);
  xhr.send();
  xhr.onload = function () {
    const productsArr = JSON.parse(xhr.responseText).items;
    const ArrOfExistProducts = productsArr.filter((elem) =>
      productsKeys.includes(elem.id.toString())
    );
    const newPrice = ArrOfExistProducts.reduce((totle, elem) => {
      return totle + elem.price * products[elem.id.toString()];
    }, 0);
    totlePrice.textContent = `${newPrice.toFixed(2)}$`;
  };
}
// calcule new number of items
function calcNewNbOfItems() {
  const nbOfItems = document.querySelector(".number-of-products");
  const products = JSON.parse(localStorage.getItem("products"));
  nbOfItems.textContent = Object.values(products).reduce(
    (s, elem) => s + elem,
    0
  );
}
// open the cart after adding item
function openCart() {
  const aside = document.querySelector("aside.product-cart");
  aside.classList.add("show-cart");
  document.querySelector(".overlay").classList.add("show-overlay");
}
function manageLocalStorage(type, id) {
  let products = JSON.parse(localStorage.getItem("products")) || {};
  let returnValue;
  if (id) {
    if (type === "increment") {
      returnValue = products[id] ? ++products[id] : null;
    }
    if (type === "decrement") {
      returnValue =
        products[id] && products[id] > 1 ? --products[id] : delete products[id];
    }
    if (type === "add") {
      returnValue = !products[id];
      returnValue ? (products[id] = 1) : "";
      changeText(id, true);
      openCart();
    }
    if (type === "delete") {
      returnValue = products[id];
      products[id] ? delete products[id] : "";
      changeText(id, false);
    }
  }
  if (type === "clear") {
    Object.keys(products).forEach((id) => {
      changeText(id, false);
    });
    products = {};
  }
  localStorage.setItem("products", JSON.stringify(products));
  calcTotelPrice();
  calcNewNbOfItems();
  return returnValue;
}
// add Click events

document.addEventListener("click", function (e) {
  const cartCenter = document.querySelector(".cart-center");
  const product = e.target.parentElement.parentElement;
  const id = Number(product.dataset.id);
  if (e.target.classList.contains("state")) {
    manageLocalStorage("add", id) ? document.appendProductToCart(id) : "";
  }
  if (e.target.classList.contains("clear-cart")) {
    manageLocalStorage("clear");
    cartCenter.innerHTML = "";
  }
  if (e.target.classList.contains("remove-product")) {
    manageLocalStorage("delete", id) ? cartCenter.removeChild(product) : "";
  }
  if (e.target.classList.contains("increment-product")) {
    e.target.nextElementSibling.textContent = manageLocalStorage(
      "increment",
      id
    );
  }
  if (e.target.classList.contains("decrement-product")) {
    const newValue = manageLocalStorage("decrement", id);
    if (typeof newValue === "number") {
      e.target.previousElementSibling.textContent = newValue;
    } else {
      cartCenter.removeChild(product);
    }
  }
});
