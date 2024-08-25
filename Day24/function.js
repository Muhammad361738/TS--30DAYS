"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.add = void 0;
exports.default = Add;
function Add(num1, num2) {
    return num1 + num2;
}
var add = function (a, b) { return a + b; };
exports.add = add;
// Create two modules; one that exports a class, and another that imports the class and creates an instance.
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello my Name is : ".concat(this.name));
    };
    return Person;
}());
exports.Person = Person;
