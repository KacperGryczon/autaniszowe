const navEl = document.querySelector("nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav-open");
  hamburgerEl.classList.toggle("hamburger-open");
});

const headerEl = document.querySelector("header");
const scrollEl = document.querySelector(".scroll-animation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    headerEl.classList.add("header-scrolled");
    scrollEl.classList.add("disabled");
  } else if (window.scrollY <= 50) {
    headerEl.classList.remove("header-scrolled");
  }
});
