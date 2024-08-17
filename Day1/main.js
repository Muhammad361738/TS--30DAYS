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
var circle = {
    kind: "circle",
    radius: 5
};
var rectanglr = {
    kind: "rectangle",
    height: 5,
    width: 4
};
console.log(circle);
console.log(rectanglr);
