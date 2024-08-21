// Finding the Position of a Substring: Write a function that locates the first occurrence of the word 
// `code` within any given string and returns its position.

function positionOfString (sentence : string){
    return sentence.indexOf("typescript");
}
console.log(positionOfString("Learn typescript and code with typescript "));

// Checking for Text Presence: Create a function that checks if the word `JavaScript` is present in a
//  given string. It should return `true` if found, otherwise `false`.
function hasJavascript (sentence :string):boolean{
    return sentence.includes("javascript");
}
console.log(hasJavascript("learn javascript and code with javascript "));
// Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

function subString(sentence : string ){
    return sentence.substring(0,10);
}
console.log(subString("Hello world ia m starting new journey with coding and use  first time substring method"))