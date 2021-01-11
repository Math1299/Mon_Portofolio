const btnMenu = document.querySelector(".btn-round-menu");
const nav = document.querySelector(".nav-gauche");
const allItemNav = document.querySelectorAll(".nav-nemu-items");
const line = document.querySelector(".container-line");

btnMenu.addEventListener("click", () => {
  line.classList.toggle("active");
});
