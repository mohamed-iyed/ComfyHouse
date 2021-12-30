Document.prototype.appendFooter = function (parent) {
  parent ||= document.querySelector("body");
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <p>&copy; All Rights Reserved <span class="date">12/29/2021</span></p>
  `;
  parent.append(footer);
};
