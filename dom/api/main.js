function init() {
  // selecting elements - you can use css selectors in function argument
  const p = document.querySelector("p");
  const divs = document.querySelectorAll("div");
  console.log(p);
  console.log(divs);
}

window.addEventListener("DOMContentLoaded", init);
