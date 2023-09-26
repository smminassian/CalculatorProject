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


    My code has a bug it only does +
*/
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
          //This function is where the error is. Its always adding because when I say calc.append(6), current number = 6 
        //but when i say calc.append(2) 6 goes to value and then 2 goes to current number
    }

    calculate(operation){

        //prev number is never being updated
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
        
    //     switch(operation){
    //         case('+'):
    //             return this.prevNumber + this.currentNumber;
                
    //         break;
    //         case('-'):
    //             return this.prevNumber - this.currentNumber;
            
    //         break;
    //         case('*'):
    //             return this.prevNumber * this.currentNumber;
            
    //         break;
    //         case('/'):
    //             if(this.currentNumber == 0){
    //                 throw("Divide by zero error");
    //             }
    //             else{
    //                 return this.prevNumber / this.currentNumber;
    //             }
            
    //         case('--'):
    //              throw("Error: too many arguments");
    //         break;
    //         case('++'):
    //             throw("Error: too many arguments");
    //         break;
    //         case('**'):
    //              throw("Error: too many arguments");
    //         break;
    //         case('//'):
    //                 throw("Error: too many arguments");
    //         break;
                
    //     }        
    // }
}
    }
    const calc = new calculator();
    
    calc.append(2); 
    calc.append(4);
    console.log(calc.prevNumber);
    console.log(calc.currentNumber);
    console.log(calc.calculate('/')); 
    
    