

const calculator={
      displayValue:'0',
      firstOprand:null,
      waitingForSecondOperand: false,
      operator: null
};



function inputDigit(digit){
   
    const {waitingForSecondOperand,displayValue}=calculator;

      if(waitingForSecondOperand===true){
          calculator.displayValue=digit;
          calculator.waitingForSecondOperand=false;

      }else{
        calculator.displayValue=displayValue==='0'?digit:displayValue+digit;
      }
}



function inputDecimal(dot){

   if(calculator.waitingForSecondOperand==true){
       calculator.displayValue='0';
       calculator.waitingForSecondOperand=false;
       return;
   }


    if(!calculator.displayValue.includes(dot)){
        calculator.displayValue+=dot;
        
    }
}



function handleOperator(nextOperator){
    
    const {firstOprand,displayValue,operator}=calculator;

     const inputValue=parseFloat(displayValue);

     if(operator && calculator.waitingForSecondOperand){
         calculator.operator=nextOperator;
         console.log(calculator);
         return;
     }

     if(firstOprand === null && !isNaN(inputValue)){
         calculator.firstOprand=inputValue;
     }
     else{
         const result=calculate(firstOprand,inputValue,operator);
         calculator.displayValue=String(result);
         calculator.firstOprand=result;
     }
     

     calculator.waitingForSecondOperand=true;
     calculator.operator=nextOperator;

  console.log(calculator);
}

function calculate(firstOprand,seconOprand,operator){

    if(operator==="+"){
       return firstOprand+seconOprand;
    }else 
    if(operator==="-"){
        return firstOprand-seconOprand;
    }
    else 
    if(operator==="*"){
        return firstOprand*seconOprand;
    }
    else 
    if(operator==="/"){
        return firstOprand/seconOprand;
    }
    return seconOprand;
}


function handleReset(){
    calculator.displayValue='0';
    calculator.firstOprand=null;
    calculator.waitingForSecondOperand=false;
    calculator.operator=null;
}

function handleDelete(){
    const {displayValue,firstOprand}=calculator;
    const inputLen=displayValue.length;
    console.log(inputLen);

    if(inputLen===1 && firstOprand===null){
        calculator.displayValue='0';
    }

    else if(inputLen>0){
       calculator.displayValue=displayValue.substring(0,inputLen-1);
       console.log(calculator.displayValue);
    }
}



function updateDisplay(){
    const display=document.querySelector(".calculator-screen");
    display.value=calculator.displayValue;
}

updateDisplay();




const keys = document.querySelector('.typepad');

keys.addEventListener('click',(e)=>{
    // taget=e.target 
    console.log(e); 
    const  {target}=e;
    
if(!target.matches('button')){
    return;
}



if (target.classList.contains('operator')){
    handleOperator(target.value);
    updateDisplay();
    return;
}

if(target.classList.contains('btn--reset')){
    if (target.value==='reset'){
        handleReset();
        updateDisplay();
        return;
    }
}

if(target.classList.contains('btn--del')){
    if(target.value==='delete'){
        handleDelete();
        updateDisplay();
        return;
    }
}

if(target.classList.contains('btn--dec')){
    inputDecimal(target.value);
    updateDisplay();
    return;
}

inputDigit(target.textContent);
updateDisplay();
 
})




// -----------toggle theme -------------------//

const toggleElement = document.getElementById("toggle");
const toggleContainer = document.getElementById("toggle-container");

const themeContainer = Array.from(document.getElementById("theme-selectors").children);
console.log(themeContainer);
const themeInputs = themeContainer.filter(childElement => childElement.hasAttribute("id"));

let theme = +toggleElement.classList[1].split("-")[1];
console.log(theme);
toggleContainer.addEventListener("click", () => {
    theme++;
    switch (theme) {
        case 2:
            toggleElement.classList.replace("theme-1", "theme-2");
            document.body.classList.replace("theme-1", "theme-2");
            break;
        case 3:
            toggleElement.classList.replace("theme-2", "theme-3");
            document.body.classList.replace("theme-2", "theme-3");
            break;
        case 4:
            toggleElement.classList.replace("theme-3", "theme-1");
            document.body.classList.replace("theme-3", "theme-1");
            theme = 1;
            break;
    }
});