const hamburger = document.querySelector(".nav--mobile--bar--hamburger");
const mobilemenu=document.querySelector(".nav--mobile--menu");

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobilemenu.classList.toggle('active');

})