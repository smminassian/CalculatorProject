
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
    
    calc.append(2); 
    calc.append(4);
    console.log(calc.calculate('+')); 
    
    