function scrollDown(){
    window.scroll({
              top: document.body.scrollHeight,
              behavior: 'smooth'
          });
  }

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header--menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}