'use strict';

    class calculator{
        constructor(){
        this.prevNumber = '';
        this.currentNumber = '';
    }

    clear(){
        this.prevNumber = '';
        this.currentNumber = '';
    }

    append(value){
        this.prevNumber = this.currentNumber.toString();
        this.currentNumber = value.toString();
        display(this.currentNumber);
        return this.currentNumber;
    }

    calculate(operation){
         if(operation === '+'){
            return Number(this.prevNumber) + Number(this.currentNumber);
        }
        else if(operation === '-'){
            return Number(this.prevNumber) - Number(this.currentNumber);
        }
        else if(operation === '*'){
            return Number(this.prevNumber) * Number(this.currentNumber);
        }
        else if(operation === '/'){
            if((Number(this.currentNumber)) != 0){
                return Number(this.prevNumber) / Number(this.currentNumber);
           }
           else{
            console.log("NaN");
           }
        }
    }
}
    
    const calc = new calculator();

    
    const numberButton = document.querySelectorAll(".number");
    const OperationButton = document.querySelectorAll(".Operation");


     OperationButton.addEventListener(".Operation").forEach(button => {button.addEventListener("click", Operation(val))}); 


     function Operation(val){
        if(val === '+' || '-' || '*' || '/'){  
            const result = calc.calculate(val);
            display(result);
                if(val === '='){
                    display(result);
                }
     }
    }
    
    numberButton.addEventListener(".number").forEach(button => {button.addEventListener("click", myAppendFunction(val))});
                                                                                   
    function myAppendFunction(val){
       if(!isNaN(val)){
        calc.append(val);
        display(val);
       }

    }

    function setClear(){
        calc.clear();
        display(calc.currentNumber);
    }

    function display(value){
        const input = document.getElementById('inputBox');
        if(value != NaN){
            input.value = value;
        }
     }
    
