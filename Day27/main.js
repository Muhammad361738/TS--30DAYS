// Use console.log() to debug and track the value of a variable inside a loop.
// ***************** Demonstrates using console.log() inside a loop to track  variable values
for (var i = 0; i <= 5; i++) {
    console.log("Iteration ".concat(i, " "), ' i value : ', i);
    // Logs the current iteration number and the value of i
}
// This loop iterates five times, logging the value of 'i'//  during each iteration to help with debugging.
// Implement a try-catch block to handle potential errors in a block of code.
//  ***************Demonstrates using a try-catch block to handle errors
try {
    // Intentionally cause an error
    throw new Error("Some Wen wrong");
}
catch (error) {
    console.log(error.message);
}
