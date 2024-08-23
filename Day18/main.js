// Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
var countries = new Map();
countries.set("America", "Wasington DC");
countries.set("France", " Paris");
countries.set("Japan", "Tokyo");
countries.set("Pakistan", "Islamabad");
console.log(countries);
// Write a function that checks if a Map contains a key for `Canada` and logs the capital if it exists.
function toCheckTheCountry(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of canada is ".concat(countries.get("Canada")));
    }
    else {
        console.log("canada is not in map");
    }
}
toCheckTheCountry(countries);
// Iterate over a Map of student IDs and names, and log each pair to the console.
var student = new Map();
student.set(1, "Talha");
student.set(2, "Zain");
student.set(3, "Waqar");
student.set(4, "Salman");
student.forEach(function (name, id) {
    console.log("The ID of student is ".concat(id, " and name is ").concat(name));
});
