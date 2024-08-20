// Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and
//  year. Then, show how you can access the model property of the car.
var car = {
    make: "Honda",
    model: "Cvic",
    year: 2023
};
console.log(car.model);
// Updating Object Properties: Add a property named `color` to the existing car object, and then update the `year` 
// property to `2021`. Show how to perform these operations.
car.year = 2021;
console.log(car);
// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all 
// of its properties and values.
function funObj(obj) {
    for (var property in obj) {
        console.log("".concat(property, " ").concat(obj[property]));
    }
}
funObj({
    make: "Honda",
    model: "civic",
    color: "gray",
    year: 2023
});
