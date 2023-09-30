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
//         this.prevNumber = this.currentNumber.toString();
//         this.currentNumber = value.toString();
//         display(this.currentNumber);
//         return this.currentNumber;
//     }

//     calculate(operation){
//          if(operation === '+'){
//             return Number(this.prevNumber) + Number(this.currentNumber);
//         }
//         else if(operation === '-'){
//             return Number(this.prevNumber) - Number(this.currentNumber);
//         }
//         else if(operation === '*'){
//             return Number(this.prevNumber) * Number(this.currentNumber);
//         }
//         else if(operation === '/'){
//             if((Number(this.currentNumber)) != 0){
//                 return Number(this.prevNumber) / Number(this.currentNumber);
//            }
//            else{
//             console.log("NaN");
//            }
//         }
//     }
// }
    
//     const calc = new calculator();

    
//     const numberButton = document.querySelectorAll(".number");
//     const OperationButton = document.querySelectorAll(".Operation");


//      //OperationButton.forEach(button => {button.addEventListener("click", Operation(button.value))}); 


//      function Operation(value){
//         if(value === '+' || '-' || '*' || '/'){  
//             const result = calc.calculate(value);
//             display(result);
//                 if(value === '='){
//      }
//     }
// }
    
//     numberButton.forEach(button => {button.addEventListener("click", myAppendFunction(button.value))});
                                                                                   
//     function myAppendFunction(value){
//        if(!isNaN(value)){
//         calc.append(value);
//         display(value);
//        }

//     }

//     function setClear(){
//         calc.clear();
//         display(calc.currentNumber);
//     }

//     function display(value){
//         const input = document.getElementById('inputBox');
//         if(value != NaN){
//             input.value = value;
//         }
//      }
    
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
//         this.prevNumber = this.currentNumber.toString();
//         this.currentNumber = value.toString();
//         display(this.currentNumber); 
//         return this.currentNumber;
//     }

//     calculate(operation){
//          if(operation === '+'){
//             return Number(this.prevNumber) + Number(this.currentNumber);
//         }
//         else if(operation === '-'){
//             return Number(this.prevNumber) - Number(this.currentNumber);
//         }
//         else if(operation === '*'){
//             return Number(this.prevNumber) * Number(this.currentNumber);
//         }
//         else if(operation === '/'){
//             if((Number(this.currentNumber)) != 0){
//                 return Number(this.prevNumber) / Number(this.currentNumber);
//            }
//            else{
//             console.log("NaN");
//            }
//         }
//     }
// }
    

//      function Operation(val){
//         if(val === '+' || '-' || '*' || '/'){  
//             const result = calc.calculate(val);
//           		display(result);
//                 if(val === '='){
//                     display(result);
//                 }
//     	 }
//     }
    
                                                                                   
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
//             input.value = value;
//         }
//      }


//     const calc = new calculator();
    
//     const numberButton = document.querySelectorAll(".number");
//     const OperationButton = document.querySelectorAll(".Operation");

//     OperationButton.forEach(button => {button.addEventListener("click", Operation(button.value))}); 
    
//     //numberButton.forEach(button => {button.addEventListener("click", myAppendFunction(button.value))});

	
// 	for(var i =0; i<numberButton.length; i++)
//     {
//      	numberButton[i].addEventListener("click", myAppendFunction(numberButton[i].value));
//     }

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
        this.currentNumber = value.toString();
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
            console.log("NaN");
           }
        }
    }
}
const calc = new calculator();
    

     function Operation(event){
        let val = event.target.value;
        if(val === '+' || '-' || '*' || '/'){  
            const result = calc.calculate(val);
          		display(result);
                if(val === '='){
                    display(result);
                }
    	 }
    }
    
                                                                                   
    function myAppendFunction(event){
        let val = event.target.value;
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


 window.addEventListener('DOMContentLoaded', (event) => {

   
   	
    
    const numberButton = document.querySelectorAll(".number");
    const OperationButton = document.querySelectorAll(".Operation");

    OperationButton.forEach(button => {button.addEventListener("click", event => {Operation(event)},false); 
    
    //numberButton.forEach(button => {button.addEventListener("click", myAppendFunction(button.value))});

	
	for(var i =0; i<numberButton.length; i++)
    {
     	numberButton[i].addEventListener("click", event => {myAppendFunction(event)},false);
    }
    document.getElementById("clear").addEventListener("click", event=> {setClear()}, false);

   
 });
    

 });





