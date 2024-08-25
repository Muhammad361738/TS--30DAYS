// Create a Promise that resolves with `Hello, World!` after 2 seconds.
var helloPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Hello world");
    }, 2000);
});
helloPromise.then(function (message) { return console.log(message); });
// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// **********Creates a Promise that either resolves or rejects based on a condition
var mathPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5;
    // Randomly choose success or failure
    if (success) {
        resolve("Success");
    }
    else {
        reject(new Error("Failer"));
    }
});
mathPromise.then(function (result) { return console.log(result); }) // Handles a successful resolution
    .catch(function (error) { return console.log(error.message); }); // Handles a rejection
// Explain the use of the Promise.all() method with an example.
// ************* Example using Promise.all to wait for multiple promises to resolve
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});
