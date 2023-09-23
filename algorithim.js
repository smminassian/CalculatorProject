//Problem: I need to get my calculator to work.
//SmallerProblem: I need to set up my class and set up the functions I will use(Get it check by professor or tutor)
//I need a clear function to clear all data(Completed)
'use strict';
    class calculator{
        calculator(){
        this.prevNumber = 0.0
        this.currentNumber = 0.0
    }

    clear(){
        this.prevNumber = 0.0;
        this.currentNumber = 0.0;
    }

    append(value){
        const value = 0;
        this.currentNumber = this.currentNumber + value;
        return this.currentNumber;
    }


    calculate(){
        //create a switch case that goes over +, -, x, /, and division by zero error
        let operation = '+' || '-' || '*' || '/' || '--' || '++' || '**' || '//';
        switch(operation){
            case('+'):
                return this.prevNumber + this.currentNumber;
                
            break;
            case('-'):
                return this.prevNumber + this.currentNumber;

            break;
            case('*'):
                return this.prevNumber * this.currentNumber;

            break;
            case('/'):
                let calculation = this.prevNumber / this.currentNumber;
                if(this.currentNumber == 0){
                    throw("Divide by zero error");
                }
                
            break;
            case('--'):
            break;
            case('++'):
            break;
            case('**'):
            break;
            case('//'):
            break;
                
        }        
    }
    }
    

    const calc = new calculator();
    calculator.append(6);
    console.log(calculator.calculate('+'));
    