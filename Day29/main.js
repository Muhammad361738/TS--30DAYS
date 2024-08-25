// Demonstrate the use of the setTimeout() function to execute code after a delay.
// setTimeout(() =>{
//     console.log('Hello World  This message is shown after two sec delay');
// },2000)
// Explain the concept of the event loop in JavaScript with an example.
// console.log("Started");
// setTimeout ( () =>{
//     console.log("Call Back Executed ");
// } ,0);
// console.log("End");
// Although the timeout is 0, "Callback executed" 
// is logged after "End" due to the event loop.
// Describe how asynchronous callbacks differ from synchronous code execution.
// **************************** Synchronous example
console.log("Before Synchronous");
// Simulate a synchronous blocking operation
for (var i = 0; i <= 9; i++) { }
console.log("After Synchronous operation ");
// ****************************Asynchronous example
console.log("Before asynchronous operation");
setTimeout(function () {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
