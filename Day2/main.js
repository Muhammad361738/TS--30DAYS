// Combine Strings and Numbers: Write a function that merges a piece of text with a number. 
// For example, if provided with Age: and 30, it should give back Age: 30.
function combineStringNumber(id, num) {
    return id + num;
}
console.log(combineStringNumber("ID : ", 183));
// Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing 
// them using the `%` sign. For example, `remainder(5, 2)` should give `1`.
function remainDer(num1, num2) {
    return num1 % num2;
}
console.log(remainDer(10, 4));
// Logical AND Verification: Create a function that checks two boolean (true or false) values.
//  It should only say `true` if both are true, using the `&&` operator. 
// For instance, `checkBothTrue(true, false)` should be `false`.
function logicalFunction(firstValue, secondValue) {
    if (firstValue && secondValue === true) {
        console.log("Logical ()and operators work");
    }
    else {
        console.log("condition is wrong ");
    }
}
logicalFunction(true, false);
