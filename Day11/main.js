// // Create an array of your three favorite fruits and add a new fruit to the end of the array.
// let myArray : string [] = ["Apple", "Mango", "Banana"];
// myArray.push("Orange");
// console.log(myArray);
// // Write a function to remove the last element from an array and return the removed element.
// function removeLastElement (fruits :string[]){
//     return fruits.pop()
// }
// console.log(removeLastElement(["apple","mango","orange","banana"]))
// Find the index of `Banana` in an array of fruits and replace it with `Mango`.
function replaceElement(myFruits) {
    var index = myFruits.indexOf("Banana");
    if (index !== -1)
        myFruits[index] = "Mango";
}
var myFruits = ["Apple", "Banana", "orange", "Graphs"];
replaceElement(myFruits);
console.log(myFruits);
