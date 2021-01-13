const btnMenu = document.querySelector(".btn-round-menu");
const nav = document.querySelector(".nav-gauche");
const allItemNav = document.querySelectorAll(".nav-menu-items");
const line = document.querySelector(".container-line");

btnMenu.addEventListener("click", () => {
  line.classList.toggle("active");
  nav.classList.toggle("menu-visible");
});

if (window.matchMedia("(max-width: 1300px)")) {
  allItemNav.forEach((items) => {
    items.addEventListener("click", () => {
      nav.classList.toggle("menu-visible");
      line.classList.toggle("active");
    });
  });
}

//ANIMATION ECRITURE

const txtAnim = document.querySelector(".txt-animation");

let typewriter = new Typewriter(txtAnim, {
  loop: false,
  deleteSpeed: 20,
});

typewriter
  .pauseFor(1800)
  .changeDelay(20)
  .typeString("Moi c'est Mathieu Perret")
  .pauseFor(300)
  .typeString("<Strong>, Développeur Web</Strong> !")
  .pauseFor(1000)
  .deleteChars(5) //POUR DELETE DES CARACTERES
  .typeString('<span style="color: #27ae60;"> CSS</span> !')
  .pauseFor(1000)
  .deleteChars(5) //POUR DELETE DES CARACTERES
  .typeString('<span style="color: #EA39ff;"> PhP</span> !')
  .pauseFor(1000)
  .deleteChars(5) //POUR DELETE DES CARACTERES
  .typeString('<span style="color: midnightblue;"> React</span> !')
  .pauseFor(1000)
  .deleteChars(8) //POUR DELETE DES CARACTERES
  .typeString('<span style="color: #ff6910;"> JavaScript</span> !')
  .start();
