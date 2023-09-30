'use strict';

    class calculator{
      
        constructor(){
        this.prevNumber = '';
        this.currentNumber = '';
        this.operation=''
        this.result=''
    }

    clear(){
        this.prevNumber = '';
        this.currentNumber = '';
        this.operation = '';
        this.result = '';
    }
          
    append(value){
        this.prevNumber = this.currentNumber.toString();
        this.currentNumber = value.toString();
        this.display(this.currentNumber); 
        return this.currentNumber;
    }

    calculate(){

      let result = 0
              
         if(this.operation === '+'){
            result= Number(this.prevNumber) + Number(this.currentNumber);
        }
        else if(this.operation === '-'){
            result= Number(this.prevNumber) - Number(this.currentNumber);
        }
        else if(this.operation === '*'){
            result= Number(this.prevNumber) * Number(this.currentNumber);
        }
        else if(this.operation === '/'){
            if((Number(this.currentNumber)) != 0){
                result= Number(this.prevNumber) / Number(this.currentNumber);
           }
        else{
            console.log("NaN");
            result = "NaN";
           }
       }

          this.result = result.toString();
          let strResult=''
          strResult = this.prevNumber + this.operation + this.currentNumber+"="+this.result;
          this.display(strResult);
        
    }

    Operation(event){
        let val = event.target.value;

        if(val === '+' || val === '-' || val === '*' || val === '/'){  
            this.operation = val;
         } 
        else  if(val ==='=')
          this.calculate();
    }

    myAppendFunction(event){
        let val = event.target.value;
       if(!isNaN(val)){
        this.append(val);
        this.display(val);
       }

    }

    setClear(){
        this.clear();
        this.display(this.currentNumber);
    }

     display(value){
        const input = document.getElementById('inputBox');
        if(value != NaN){
            input.value = value;
        }
     }

}
      
 

    const calc = new calculator();
    
    const numberButton = document.querySelectorAll(".number");
    const OperationButton = document.querySelectorAll(".Operation");

    OperationButton.forEach(button => {button.addEventListener("click", event => {calc.Operation(event)})},false);
    
    
    for(var i =0; i<numberButton.length; i++)
    {
        numberButton[i].addEventListener("click", event => {calc.myAppendFunction(event)},false);
    }
    document.getElementById("clear").addEventListener("click", event=> {calc.setClear()}, false);


    






