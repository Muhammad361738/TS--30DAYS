// Convert a traditional function expression to an arrow function.
var _this = this;
function traditional(num1, num2) {
    return num1 + num2;
}
var arrowFunction = function (a, b) { return a + b; };
console.log(traditional(25, 35));
console.log(arrowFunction(56, 24));
// Create an arrow function that takes multiple parameters and returns the product of all parameters.
var productFunction = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, product) { return total * product; }, 1);
};
console.log(productFunction(2, 2, 2, 2));
// Explain how this behaves differently in arrow functions compared to traditional functions.
var traditionalVsArrow = {
    value: "traditional ",
    getValue: function () {
        console.log("traditional function", this.value);
    },
    arrowFun: function () {
        console.log("ArrowFuncction ", _this.value);
    }
};
traditionalVsArrow.getValue();
traditionalVsArrow.arrowFun();
