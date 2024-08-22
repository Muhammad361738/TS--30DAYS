// Determine if a given year is a leap year using comparison operators.


function checkLeapyear (year  : number ){
    return  (year % 4 === 0 && year % 100 !== 0) || year % 400 ===0

}
console.log(checkLeapyear(2002))
// console.log(checkLeapyear(2003))
// console.log(checkLeapyear(2004))
// console.log(checkLeapyear(2005))
// console.log(checkLeapyear(2006))
// console.log(checkLeapyear(2007))
// console.log(checkLeapyear(2008))

// Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
 function logicalOperator (num : number) : boolean{
    return (num % 2 === 0 && num % 3 === 0)
}
console.log(logicalOperator(12))
// console.log(logicalOperator(25))
// console.log(logicalOperator(26))
// console.log(logicalOperator(27))
// console.log(logicalOperator(28))
// console.log(logicalOperator(29))
// console.log(logicalOperator(30))
// console.log(logicalOperator(42))

// Compare two strings to check if they are identical, ignoring case sensitivity.

function toCheckStringCases (str1 : string ,str2: string ): boolean{
    return str1.toLowerCase() === str2.toLowerCase()
}
console.log(toCheckStringCases("muhammad","MUHAMMAD"))
console.log(toCheckStringCases("TALHA","TALHAA"))

