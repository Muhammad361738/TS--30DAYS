//Create a function that accepts a callback and invokes it with some arguments.
// This function accepts a callback function and 
// invokes it with given arguments
function executeCallback(
    callback: (arg1: number, arg2: number) => void,
    arg1: number,
    arg2: number
  ): void {
    callback(arg1, arg2); 
    // Invokes the callback with the specified arguments
  }
  
  // Example callback function that adds two numbers
  const add = (a: number, b: number) => {
    console.log(a + b); // Outputs the sum of a and b
  };
  
  executeCallback(add, 5, 3); // Outputs: 8
  // Demonstrates invoking a callback function with
  // arguments to perform an addition.
  

//Show an example of a callback function used to filter an array of numbers.
// This array of numbers will be filtered
const numbers1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Uses .filter() with a callback function to filter
// out numbers greater than 5
const filteredNumbers1: number[] = numbers1.filter
((number) => number > 5);

console.log(filteredNumbers1); // Outputs: [6, 7, 8, 9, 10]
// The callback function here checks each number, and .filter()
// creates a new array with numbers that meet the criteria.


//Explain how to handle errors in a callback pattern.

// This array of numbers will be filtered
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Uses .filter() with a callback function to filter
// out numbers greater than 5
const filteredNumbers: number[] = numbers.filter
((number) => number > 5);

console.log(filteredNumbers); // Outputs: [6, 7, 8, 9, 10]
// The callback function here checks each number, and .filter()
// creates a new array with numbers that meet the criteria.




