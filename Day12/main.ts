// Use the .map() method to create a new array that contains the length of each word from an array of words.

let myArray : string [] = ["Hello","World" ,"JavaScript","TypeScript"]

const myArrayWordLength : number []= myArray.map((word) =>word.length);



console.log(myArrayWordLength)



// Write a function that uses the .filter() method to return an array of numbers greater than 10.

function graterThenTen (numArray : number []) : number []{

    return numArray.filter((num)=> num > 10)
    
}
const myNumberArray : number [] = [5,15,12,18,6,7,9,25];

console.log(graterThenTen(myNumberArray));

// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

const mySum = myArrayWordLength.reduce((init,final) =>{
    return init + final
})
console.log(mySum);