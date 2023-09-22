//Problem: I need to get my calculator to work.
//SmallerProblem: I need to set up my class and set up the functions I will use(Get it check by professor or tutor)
//I need a clear function to clear all data(Completed)
'use strict';
    class calculator{
        calculator = function(prevNumber, currentNumber){
        this.prevNumber = prevNumber;
        this.currentNumber = currentNumber;
        prevNumber = 0.0;
        currentNumber = 0.0;
    }

    clear = function(prevNumber, currentNumber){
        prevNumber = 0.0;
        currentNumber = 0.0;
    }

    append = function(currentNumber, value){
        value = 0;
        currentNumber = currentNumber + value;
        return currentNumber;
    }


    calculate = function(prevNumber, currentNumber){
        //create a switch case that goes over +, -, x, /, and division by zero error
        let operation = '+' || '-' || '*' || '/' || '--' || '++' || '**' || '//';
        switch(operation){
            case('+'):
                return prevNumber + currentNumber;
            break;
            case('-'):
                return prevNumber + currentNumber;
            break;
            case('*'):
                return prevNumber * currentNumber;
            break;
            case('/'):
                let calculation = prevNumber / currentNumber;
                if(calculation == 0){
                    throw("Error");
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

    calculator = new calculator();
    calculator.append(6);
    console.log(calculator.calculate('+'));
    