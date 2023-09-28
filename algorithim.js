
'use strict';

    class calculator{
        constructor(){
        this.prevNumber = '';
        this.currentNumber = '';
        this.prev1 = '';
        this.current1 = '';
        this.prev2 = '';
        this.current2 = '';
        
    }

    clear(){
        this.prevNumber = '';
        this.currentNumber = '';


    }

    append(){
        this.prevNumber = this.prev1.toString() + this.current1.toString();
        this.currentNumber = this.prev2.toString() + this.current2.toString();
        //display(this.currentNumber);
        return Number(this.currentNumber), Number(this.prevNumber);
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
            if((this.currentNumber) !== 0){
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
    calc.append(2);
    calc.append(4);
    console.log(calc.prevNumber);
    console.log(calc.currentNumber);

    // const numberButton = document.querySelectorAll(".number");
    // const OperationButton = document.querySelectorAll(".Operation");


    //  OperationButton.addEventListener(".Operation").forEach(button => {button.addEventListener("click", Operation(val))}); 

    //  function Operation(val){
    //     if(val === '+' || '-' || '*' || '/' || '--' || '++' || '**' || '//'){  //for each instance of class operation it adds click
    //     const result = calc.calculate(val);
    //     display(val);
    //     display(result);
    //  }
    // }

    // numberButton.addEventListener(".number").forEach(button => {button.addEventListener("click", myAppendFunction(val))});
                                                                                   
    // function myAppendFunction(val){
    //    if(!isNaN(val)){
    //     calc.append(val);
    //     display(val);
    //    }

    // }

    // function setClear(){
    //     calc.clear();
    //     display(calc.currentNumber);
    // }

    // function display(value){
    //     const input = document.getElementById('inputBox');
    //     if(value != NaN){
    //         input.value = calc.currentNumber;
    //     }
    // }
    
    
    