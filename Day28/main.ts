// Create a Promise that resolves with `Hello, World!` after 2 seconds.
const helloPromise = new Promise <string>((resolve,reject)=>{
    setTimeout (()=>{
        resolve("Hello world")
    },2000)
})

helloPromise.then((message) =>console.log(message))

// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

// **********Creates a Promise that either resolves or rejects based on a condition
const mathPromise = new Promise <string> ((resolve,reject)=>{

    const success = Math.random() > 0.5
     // Randomly choose success or failure

    if (success){
        resolve("Success")
    }else{
        reject(new Error ("Failer"))
    }
});
mathPromise.then((result)=> console.log(result))   // Handles a successful resolution
 
.catch((error)=>console.log(error.message))             // Handles a rejection

// Explain the use of the Promise.all() method with an example.

// ************* Example using Promise.all to wait for multiple promises to resolve

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve) => {
    setTimeout(resolve,100,"foo")
})

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
    
})