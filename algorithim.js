
'use strict';

    class calculator{
        constructor(){
        this.prevNumber = 0.0;
        this.currentNumber = 0.0;
    }

    clear(){
        this.prevNumber = '';
        this.currentNumber = '';
        display();
    }

    append(value){
        this.prevNumber = this.currentNumber
        this.currentNumber = value;
        display();
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
     // const number = document.querySelectorAll(".number");
    // number.addEventListener("number").forEach(number => {number.addEventListener("click", calc.append(value))});
    // const Operation = document.querySelectorAll(".Operation");
    // Operation.addEventListener("Operation").forEach(Operation => {Operation.addEventListener("click", calc.append(value))});
    // const clear = document.querySelector(".clear")
    // clear.addEventListener("clear").forEach(clear => {clear.addEventListener("click", calc.clear())});
    //Tomorrow we wil change operation, clear, and number to id and we will figure out how to get our buttons to work. We will use get element by ID
    function Operation(){
        if()
        
    }

    function setClear(){
        calc.clear();
    }

    function myAppendFunction(value){
       if(value != NaN){
        calc.append(value);
       }
    }

    function display(){
        const input = document.getElementById('inputBox');
        if(value != NaN){
            input.value = calc.currentNumber
        }
    }
    
    
    