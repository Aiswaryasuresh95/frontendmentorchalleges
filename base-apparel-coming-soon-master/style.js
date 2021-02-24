const btn=document.querySelector('.btn');
const email=document.getElementById('email');
const error=document.querySelector('.error');
const msg=document.querySelector('.error_msg')


btn.addEventListener('click',function(){
    const value=email.value;
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(value.match(mailformat)){
        msg.innerHTML="Register sucessfull"; 
        msg.style.color="green";
        msg.style.display="block";
        error.style.display="none";


       

    }else{
        error.style.display="inline";
        msg.innerHTML="Please Provide a valid email"; 
        msg.style.color="hsl(0, 93%, 68%)";
        msg.style.display="block";
    }
})