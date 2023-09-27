
'use strict';

    class calculator{
        constructor(){
        this.prevNumber = 0.0;
        this.currentNumber = 0.0;
    }

    clear(){
        this.prevNumber = 0.0;
        this.currentNumber = 0.0;
    }

    append(value){
        this.prevNumber = this.currentNumber
        this.currentNumber = value;
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

    const number = document.querySelectorAll(".number");
    number.addEventListener("number").forEach(number => {number.addEventListener("click", calc.append(value))});
    const Operation = document.querySelectorAll(".Operation");
    Operation.addEventListener("Operation").forEach(Operation => {Operation.addEventListener("click", calc.append(value))});
    const clear = document.querySelector(".clear")
    clear.addEventListener("clear").forEach(clear => {clear.addEventListener("click", calc.clear())});
    //Tomorrow we wil change operation, clear, and number to id and we will figure out how to get our buttons to work. We will use get element by ID


    calc.append(2); 
    calc.append(4);
    console.log(calc.calculate('+')); 
    
    