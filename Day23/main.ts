// Convert a traditional function expression to an arrow function.

function traditional (num1 :number ,num2 : number ):number{
    return num1 + num2

}

const arrowFunction =  (a , b) =>   a + b


console.log(traditional(25,35));
console.log(arrowFunction(56,24));


// Create an arrow function that takes multiple parameters and returns the product of all parameters.

const productFunction = (...numbers:number []) => 
    numbers.reduce((total , product) =>  total * product , 1)

console.log(productFunction(2,2,2,2));

// Explain how this behaves differently in arrow functions compared to traditional functions.

const traditionalVsArrow = {
    value : "traditional ",
    getValue : function(){
        console.log("traditional function",this.value);
        
    },
    arrowFun : ()=>{
        console.log("ArrowFuncction ",this.value)
    }
}

traditionalVsArrow.getValue()

traditionalVsArrow.arrowFun()