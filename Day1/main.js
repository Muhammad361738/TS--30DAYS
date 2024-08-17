// Making Enums for Vehicles: Lets create categories for vehicles like cars, trucks,
//  and motorcycles using enums, and show one example.
var vehicalType;
(function (vehicalType) {
    vehicalType[vehicalType["car"] = 0] = "car";
    vehicalType[vehicalType["Truck"] = 1] = "Truck";
    vehicalType[vehicalType["motorcycles"] = 2] = "motorcycles";
})(vehicalType || (vehicalType = {}));
console.log(vehicalType.Truck);
var student = {
    name: "Talha",
    age: 19,
    course: ["javaScript", "TypeScript", "HTML", "CSS"]
};
console.log(student);
// Shape Shifter: Write a program that can describe either a circle or a rectangle using a
//  special type alias, including properties unique to each shape
