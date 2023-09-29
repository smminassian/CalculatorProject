


//Tomorrow figure out how to get double digits, figure out how to get divide to work and get a equals button
'use strict';

    class calculator{
        constructor(){
        this.prevNumber = '';
        this.currentNumber = '';
    }

    clear(){
        this.prevNumber = '';
        this.currentNumber = '';
    }

    append(value){
        this.prevNumber = this.currentNumber.toString();
        this.currentNumber = value.toString()
        display(this.currentNumber);
        return this.currentNumber;
    }

    calculate(operation){
         if(operation === '+'){
            return Number(this.prevNumber) + Number(this.currentNumber);
        }
        else if(operation === '-'){
            return Number(this.prevNumber) - Number(this.currentNumber);
        }
        else if(operation === '*'){
            return Number(this.prevNumber) * Number(this.currentNumber);
        }
        else if(operation === '/'){
            if((Number(this.currentNumber)) != 0){
                return Number(this.prevNumber) / Number(this.currentNumber);
           }
           else{
            console.log("error");
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


    console.log(calc.calculate('+'));

    
    const numberButton = document.querySelectorAll(".number");
    const OperationButton = document.querySelectorAll(".Operation");


     OperationButton.addEventListener(".Operation").forEach(button => {button.addEventListener("click", Operation(val))}); 


     function Operation(val){
        if(val === '+' || '-' || '*' || '/' || '--' || '++' || '**' || '//'){  //for each instance of class operation it adds click
        const result = calc.calculate(val);
        display(result);
     }
    }

    numberButton.addEventListener(".number").forEach(button => {button.addEventListener("click", myAppendFunction(val))});
                                                                                   
    function myAppendFunction(val){
       if(!isNaN(val)){
        calc.append(val);
        display(val);
       }

    }

    function setClear(){
        calc.clear();
        display(calc.currentNumber);
    }

    function display(value){
        const input = document.getElementById('inputBox');
        if(value != NaN){
            input.value = value;
        }
     }
    
// //Tomorrow figure out how to get my operations working again
// 'use strict';
//     class calculator{
//         constructor(){
//         this.prevNumber = '';
//         this.currentNumber = '';
//     }
//     clear(){
//         this.prevNumber = '';
//         this.currentNumber = '';
//     }
//     append(value){
//         this.prevNumber = this.currentNumber.toString() + this.prevNumber.toString();
//         this.currentNumber = this.currentNumber.toString() + value.toString()
//         display(this.currentNumber);
//         return this.currentNumber, this.prevNumber;
//     }
//     calculate(operation){
//         const prev = Number(this.prevNumber);
//         const current = Number(this.currentNumber);
//         if(!isNaN(prev) && !isNaN(current)){
//              if(operation === '+'){
//             return prev + current;
//             }
//             else if(operation === '-'){
//             return prev - current;
//           }
//             else if(operation === '*'){
//             return prev * current;
//              }
//             else if(operation === '/'){
//             if((current) !== 0){
//                 return prev / current;
//             }
//             else{
//                 console.log("Error");
//             }
//            }
//             else if(operation === '++'){
//             console.log("Error");
//             }
//             else if(operation === '--'){
//             console.log("Error");
//          }
//             else if(operation === '**'){
//             console.log("Error");
//          }
//             else if(operation === '//'){
//             console.log("Error");
//          }
      
//     }
//    }
// }
    
//     const calc = new calculator();
    
    
    
//     const numberButton = document.querySelectorAll(".number");
//     const OperationButton = document.querySelectorAll(".Operation");
//      OperationButton.addEventListener(".Operation").forEach(button => {button.addEventListener("click", Operation(val))}); 
//      function Operation(val){
//         if(val === '+' || '-' || '*' || '/' || '--' || '++' || '**' || '//'){  //for each instance of class operation it adds click
//         const result = calc.calculate(val);
//         display(result);
//      }
//     }
//     numberButton.addEventListener(".number").forEach(button => {button.addEventListener("click", myAppendFunction(val))});
                                                                                   
//     function myAppendFunction(val){
//        if(!isNaN(val)){
//         calc.append(val);
//         display(val);
//        }
//     }
//     function setClear(){
//         calc.clear();
//         display(calc.currentNumber);
//     }
//     function display(value){
//         const input = document.getElementById('inputBox');
//         if(value != NaN){
//             input.value = calc.prevNumber;
//             input.value = calc.currentNumber;
//             input.value = value;
//         }
//     }