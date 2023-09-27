
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

    // const numberButton = document.querySelectorAll(".number");
    // const OperationButton = document.querySelectorAll(".Operation");


    // OperationButton.addEventListener(".Operation").forEach(Operation => {Operation.addEventListener("click", Operation(val))}); //for each instance of class operation it adds click

    function Operation(){
        const Op = document.querySelector(".Operation");
        const val = Op.value;
        if(val === '+' || '-' || '*' || '/' || '--' || '++' || '**' || '//'){
        const result = calc.calculate(val);
        display(result);
        }
        
        
    }

    // numberButton.addEventListener(".number").forEach(number => {number.addEventListener("click", myAppendFunction())});

    function myAppendFunction(){
        const append = document.querySelector(".number"); // It is only looking at line 14 on index.html
        const val = append.value;
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
    
    
    