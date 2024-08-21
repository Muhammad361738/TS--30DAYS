// Use the .map() method to create a new array that contains the length of each word from an array of words.
var myArray = ["Hello", "World", "JavaScript", "TypeScript"];
var myArrayWordLength = myArray.map(function (word) { return word.length; });
console.log(myArrayWordLength);
// Write a function that uses the .filter() method to return an array of numbers greater than 10.
function graterThenTen(numArray) {
    return numArray.filter(function (num) { return num > 10; });
}
var myNumberArray = [5, 15, 12, 18, 6, 7, 9, 25];
console.log(graterThenTen(myNumberArray));
// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
var mySum = myArrayWordLength.reduce(function (init, final) {
    return init + final;
});
console.log(mySum);
