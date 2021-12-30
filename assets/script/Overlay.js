Document.prototype.appendOverlay = function () {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  this.querySelector("body").append(overlay);
};
