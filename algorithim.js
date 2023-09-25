//Problem: I need to get my calculator to work.
//SmallerProblem: I need to set up my class and set up the functions I will use(Get it check by professor or tutor)
//I need a clear function to clear all data(Completed)

/*If this is the problem, I can do class 
Calculator(prev, current){
    prev = prevNumber;
    current = currentNumber;

    This matches initalizing constructor in c++

    or i can take all of the function code out of the class and just say:
    calculator(){
        stuff
    }
    clear();
    append(number: value);
    calculate();
                                    

    New issue is to figure out why it keeps saying NaN
*/
'use strict';
    class calculator{
        constructor(){
        prevNumber = 0.0;
        currentNumber = 0.0;
    }


    clear(){
        prevNumber = 0.0;
        currentNumber = 0.0;
    }

    append(value){
        currentNumber = currentNumber + value;
        return calc.currentNumber;
    }
        calculate(){
        let operation = '+' || '-' || '*' || '/' || '--' || '++' || '**' || '//';
        switch(operation){
            case('+'):
                return prevNumber + currentNumber;
                
            break;
            case('-'):
                return prevNumber - currentNumber;
            
            break;
            case('*'):
                return prevNumber * currentNumber;
            
            break;
            case('/'):
                if(calc.currentNumber == 0){
                    throw("Divide by zero error");
                }
                else{
                    return calc.prevNumber / calc.currentNumber;
                }
            
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
    
    calc.append(6);
    console.log(calc.calculate('+'));
    console.log(calc.currentNumber);
    