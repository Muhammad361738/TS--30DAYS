// Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, 
// and returns the result. Show how you can call this function and log the result

function twoParameter (num1 : number , num2 : number ){
    return num1 + num2
}
console.log(twoParameter(5,8));

// Default Parameters: Write a function that greets a user. It should take the users name as a parameter and say hello. 
// If no name is given, it should greet an anonymous user.

function anonymousUser (name : string = "anomoyous"){
    return `hello` +" "+ name
}
console.log(anonymousUser("talha"));
console.log(anonymousUser());

// Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one
//  of each that performs the same task, such as squaring a number.

// 

// Function declaration for squaring a number
function squareDeclaration(number: number): number {
    return number * number;
  }
  
  // Function expression for squaring a number
  const squareExpression = function (number: number): number {
    return number * number;
  };
  
  // Using both functions to square the number 4
  console.log(squareDeclaration(4)); // Outputs: 16
  console.log(squareExpression(4)); // Outputs: 16
  // Both methods give us the same result, showing two
  // different ways to create functions that do the same thing.
  