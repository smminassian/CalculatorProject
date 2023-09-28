
'use strict';

    class calculator{
        constructor(){
        this.prevNumber = '';
        this.currentNumber = '';
    }

    clear(){
        this.prevNumber = '';
        this.currentNumber = '';
        display(this.currentNumber);
    }

    append(value){
        this.prevNumber = this.currentNumber
        this.currentNumber = Number(value);
        display(this.currentNumber);
        return this.currentNumber; 
    }

    calculate(operation){

        if(operation === '+'){
            return this.prevNumber + this.currentNumber;
        }
        else if(operation === '-'){
            return this.prevNumber - this.currentNumber;
        }
        else if(operation === '*'){
            return this.prevNumber * this.currentNumber;
        }
        else if(operation === '/'){
            if(this.currentNumber != 0){
                return this.prevNumber / this.currentNumber;
            }
            else{
                console.log("Error");
            }
        }
        else if(operation === '++'){
            console.log("Error");
        }
        else if(operation === '--'){
            console.log("Error");
        }
        else if(operation === '**'){
            console.log("Error");
        }
        else if(operation === '//'){
            console.log("Error");
    }
}
    }
    const calc = new calculator();

     const numberButton = document.querySelectorAll(".number");
    const OperationButton = document.querySelectorAll(".Operation");


     OperationButton.addEventListener(".Operation").forEach(button => {button.addEventListener("click", Operation(val))}); 

     function Operation(val){
        if(val === '+' || '-' || '*' || '/' || '--' || '++' || '**' || '//'){  //for each instance of class operation it adds click
        const result = calc.calculate(val);
        display(result);
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
        const clearing = document.getElementById("clear");
        const clear = clearing.value;
        const input = document.querySelector("input");
        input = clearing;

        calc.clear();
    }

    function display(value){
        const input = document.getElementById('inputBox');
        if(value != NaN){
            input.value = value;
        }
    }
    
    
    