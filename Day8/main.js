// Find the Length of a String: Write a function that takes a string as an argument and returns the number
//  of characters in the string.
// function funString(name : string){
//     return name.length
// }
// console.log(funString("talha"));
// Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to 
// lowercase, and logs both.
function funStringCases(name) {
    var Uper = name.toUpperCase();
    var lower = name.toLowerCase();
    console.log("".concat(Uper, " ").concat(lower));
}
funStringCases("Talha");
// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of 
// the word `JavaScript` with `TypeScript`
function replaceSentence(sentence) {
    return sentence.replace(/javaScript/g, "TypeScript");
}
console.log(replaceSentence("I love javaScript and javaScript is Awasome"));
