"use strict";

var hamburger = document.querySelector(".nav--mobile--bar--hamburger");
var mobilemenu = document.querySelector(".nav--mobile--menu");
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  mobilemenu.classList.toggle('active');
});