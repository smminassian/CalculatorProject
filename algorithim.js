
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
        this.currentNumber = number(value);
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
    const OperationButton = document.querySelectorAll("Operation")
    OperationButton.addEventListener("Operation").forEach(button => {button.addEventListener("Click", Operation())});
    function Operation(){
        const val = 

        
        
    }

    function setClear(){
        calc.clear();
    }

    function myAppendFunction(){
        const append = document.getElementById("number");
        const val = append.value;
       if(val != NaN){
        calc.append(val);
       }
    }

    function display(value){
        const input = document.getElementById('inputBox');
        if(value != NaN){
            input.value = calc.currentNumber
        }
    }
    
    
    