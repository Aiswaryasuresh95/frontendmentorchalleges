
const faqs=document.querySelectorAll('.faq');

faqs.forEach(function(faq){
    const btn=faq.querySelector('.question');
    // console.log(btn);

    btn.addEventListener("click",function(){
    //    console.log(btn);
     faq.classList.toggle('show');

    })

})


