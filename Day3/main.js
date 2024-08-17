// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents
//  a number (e.g., `5`). Return their sum as a number.
function arithematic(num1, num2) {
    return Number(num1) + num2;
}
console.log(arithematic("5", 5));
// Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
//  Round the result to two decimal places.
function multiPlyDecimal(num1, num2) {
    return Math.round(num1 * num2 * 100) / 100;
}
console.log(multiPlyDecimal(0.1, 0.2));
// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and 
// the remainder. Use an object to return both values.
function reminderAndDivision(num1, num2) {
    var quotient = Math.floor(num1 / num2);
    var reminder = num1 % num2;
    return { quotient: quotient, reminder: reminder };
}
console.log(reminderAndDivision(10, 3));
