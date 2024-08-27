//Create a function that accepts a callback and invokes it with some arguments.
// This function accepts a callback function and 
// invokes it with given arguments
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
    // Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
var add = function (a, b) {
    console.log(a + b); // Outputs the sum of a and b
};
executeCallback(add, 5, 3); // Outputs: 8
// Demonstrates invoking a callback function with
// arguments to perform an addition.
//Show an example of a callback function used to filter an array of numbers.
// This array of numbers will be filtered
var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Uses .filter() with a callback function to filter
// out numbers greater than 5
var filteredNumbers1 = numbers1.filter(function (number) { return number > 5; });
console.log(filteredNumbers1); // Outputs: [6, 7, 8, 9, 10]
// The callback function here checks each number, and .filter()
// creates a new array with numbers that meet the criteria.
//Explain how to handle errors in a callback pattern.
// This array of numbers will be filtered
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Uses .filter() with a callback function to filter
// out numbers greater than 5
var filteredNumbers = numbers.filter(function (number) { return number > 5; });
console.log(filteredNumbers); // Outputs: [6, 7, 8, 9, 10]
// The callback function here checks each number, and .filter()
// creates a new array with numbers that meet the criteria.
