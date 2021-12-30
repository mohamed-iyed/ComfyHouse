// append Components
document.appendHeader();
document.appendFooter();
document.appendCart();
document.appendOverlay();
// add functionnality

document.addEventListener("click", function (e) {
  //   close cart through btn
  if (e.target.classList.contains("close-cart")) {
    const cart =
      e.target.parentElement.parentElement.parentElement.parentElement;
    cart.classList.remove("show-cart");
    document.querySelector(".overlay").classList.remove("show-overlay");
  }
  //   close cart through overlay
  if (e.target.classList.contains("show-cart")) {
    e.target.classList.remove("show-cart");
    document.querySelector(".overlay").classList.remove("show-overlay");
  }
  // open cart
  if (e.target.classList.contains("open-cart")) {
    const aside = document.querySelector("aside.product-cart");
    aside.classList.add("show-cart");
    document.querySelector(".overlay").classList.add("show-overlay");
  }
  //   toggle navBar
  if (e.target.classList.contains("toggle-links")) {
    const listHeight = document
      .querySelector(".nav-links")
      .getBoundingClientRect().height;
    const nav = document.querySelector("nav");
    const navHeight = nav.getBoundingClientRect().height;
    if (navHeight === 0) {
      nav.style.height = `${listHeight}px`;
    } else {
      nav.style.height = `0px`;
    }
  }
});
