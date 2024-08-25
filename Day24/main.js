"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = require("./function");
//Explain how to export a function from one JavaScript file and import it into another file.
var function_2 = require("./function");
console.log((0, function_1.default)(15, 25));
console.log((0, function_2.add)(25, 35));
//  Create two modules; one that exports a class, and another that imports the class and creates an instance.
var function_3 = require("./function");
var talha = new function_3.Person("Talha");
talha.greet();
