const productsContainer = document.querySelector(".products-container");
// get Products
const xhr = new XMLHttpRequest();
xhr.open("GET", "../../products.json", true);
xhr.send();
xhr.onload = function () {
  handleResponse(JSON.parse(xhr.responseText));
};
function handleResponse(resp) {
  const products = resp.items;
  products.forEach((product) => {
    document.appendProduct(productsContainer, product);
  });
}
