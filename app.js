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

//Animation contact

const input_fields = document.querySelectorAll("input");

for (let i = 0; i < input_fields.length; i++) {
  let field = input_fields[i];

  field.addEventListener("input", (e) => {
    if (e.target.value !== "") {
      e.target.parentNode.classList.add("animation");
    } else if (e.target.value == "") {
      e.target.parentNode.classList.remove("animation");
    }
  });
}

// animation GSAP + ScrollMagic

const navbar = document.querySelector(".nav-gauche");
const titre = document.querySelector("h1");
const btn = document.querySelectorAll(".btn-acc");
const btnMedias = document.querySelectorAll(".media");
const btnRoundAccueil = document.querySelector(".btn-round");

const TL1 = gsap.timeline({ paused: true });

TL1.to(navbar, { left: "0px", ease: Power3.easeOut, duration: 0.6 });
TL1.from(titre, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 });
TL1.staggerFrom(btn, 1, { opacity: 0 }, 0.2, "-=0.30");
TL1.staggerFrom(btnMedias, 1, { opacity: 0 }, 0.2, "-=0.75");
TL1.from(
  btnRoundAccueil,
  {
    y: -50,
    opacity: 0,
    ease: Power3.easeOut,
    duration: 0.4,
  },
  "-=1"
);
window.addEventListener("load", () => {
  TL1.play();
});

// Animation ScrollMagic GSAP presentation

const presentationContainer = document.querySelector(".presentation");
const titrePres = document.querySelector(".titre-pres");
const presGauche = document.querySelector(".pres-gauche");
const listePres = document.querySelectorAll(".item-liste");

const tlpres = new TimelineMax();

tlpres.from(titrePres, { y: -200, opacity: 0, duration: 0.6 });
tlpres.from(presGauche, { y: -20, opacity: 0, duration: 0.6 }, "-=0.5");
tlpres.staggerFrom(listePres, 1, { opacity: 0 }, 0.2, "-=0.5");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: presentationContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(tlpres)
  .addIndicators()
  .addTo(controller);
