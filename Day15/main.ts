// Write a function that returns a random boolean value, true or false.

function generateRandomNumber () : boolean {
     return  Math.random() > 0.5;
}
console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());



// Create a function that generates a random hexadecimal color code.

function randomColorGenerate () : string {
    const color = "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6 , "0");
    return color 
}
console.log(randomColorGenerate())
// console.log(randomColorGenerate())
// console.log(randomColorGenerate())
// console.log(randomColorGenerate())
// console.log(randomColorGenerate())
// console.log(randomColorGenerate())
// console.log(randomColorGenerate())
// console.log(randomColorGenerate())
// console.log(randomColorGenerate())
// console.log(randomColorGenerate())

// Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

function diceRoll (){
    return Math.floor(Math.random() * 6 ) + 1
}
console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll());
