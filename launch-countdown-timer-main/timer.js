
const day = document.querySelector('.days');
const hour=document.querySelector('.hours');
const minute=document.querySelector('.minutes');
const second=document.querySelector('.seconds');

// this will give the total time needed to final date//

const finalDate= new Date('Nov 5,2021 15:37:25').getTime();



const x=setInterval(function(){

    const currentDate=new Date().getTime();

 const duration= finalDate-currentDate;

day.innerHTML=Math.floor(duration/(1000*60*60*24));
hour.innerHTML= Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
minute.innerHTML = Math.floor(( duration % (1000 * 60 * 60)) / (1000 * 60));
second.innerHTML= Math.floor((duration % (1000 * 60)) / 1000);


if(duration<0){
    clearInterval(x);
    
}
   
},1000);

