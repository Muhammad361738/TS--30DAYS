// List three reserved words in JavaScript and create a valid use case for each.

//  **************   Reserved word: let - used to declare a block-scoped 
let count = 5;
// ************** Reserved word: if - used to execute a block of code

if(count>0){
    console.log("if \t is the reserved word ");
    
}
// *************** Reserved word: return - used to exit a function and return a value from that function
function showResreveFunc(a : number, b:number):number{
    return a + b
}
console.log(showResreveFunc(8,16));

// Explain the error that occurs when trying to use a reserved word as a variable name.

// const if = "talha";

console.log("if you create variable from reserved keyword it gives Error");

