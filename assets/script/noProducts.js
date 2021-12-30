document.appendHeader();
document.appendFooter();
document.addEventListener("click", function (e) {
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
document.querySelector(".toggle-cart-btn").style.visibility = "hidden";
