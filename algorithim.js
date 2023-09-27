
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


    OperationButton.addEventListener(".Operation").forEach(Operation => {Operation.addEventListener("click", Operation(val))}); //for each instance of class operation it adds click

    function Operation(val){
        if(val === '+' || '-' || '*' || '/' || '--' || '++' || '**' || '//'){
        const push = calc.calculate(val);
        display(push);
        }
        
        
    }

    numberButton.addEventListener(".number").forEach(number => {number.addEventListener("click", myAppendFunction())});

    function myAppendFunction(){

       if(val != NaN){
        calc.append(val);
        display(val);
       }
    }

    function setClear(){
        calc.clear();
    }

    function display(value){
        const input = document.getElementById('inputBox');
        if(value != NaN){
            input.value = calc.currentNumber
        }
    }
    
    
    