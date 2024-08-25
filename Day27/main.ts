// Use console.log() to debug and track the value of a variable inside a loop.


// ***************** Demonstrates using console.log() inside a loop to track  variable values

for (let i =0; i<= 5; i++){
    console.log(`Iteration ${i} `,' i value : ', i);
      // Logs the current iteration number and the value of i
}
// This loop iterates five times, logging the value of 'i'//  during each iteration to help with debugging.




// Implement a try-catch block to handle potential errors in a block of code.

//  ***************Demonstrates using a try-catch block to handle errors

try {
      // Intentionally cause an error

    throw new Error("Some Went wrong")
    
}catch(error){
    console.log(error.message);
    
}
// This code tries to execute a block that throws an error,
// and the catch block handles the error gracefully.

