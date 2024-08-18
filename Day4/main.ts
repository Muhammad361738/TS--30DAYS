// Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5.
//  Explain how the let keyword affects the visibility of the loop variable.

function loop(){
    for (let i = 0; i<=5;i++){
        console.log(i)
    }
}
loop();
// ***************************************
// Compare `let` and `const`: Create two examples where `let` allows reassignment but `const` does not.
//  Try to reassign a `const`-declared variable and catch the error.

  let myname:string = "Talha";
  console.log(myname);
  // reasign 
  myname= "Muhammad Talha";
  console.log(myname);

  const myBestFriendsName = "waqar and Salman";
  console.log(myBestFriendsName);
//   myBestFriendsName = "Waqar, Salma and Hamza "  error cannot reasign the const variable


// *************************************** 


// Block Scope with `let` and `const`: Demonstrate block scope by creating a code block with `` that uses both `let` and 
// `const`. Show how variables declared inside the block are not accessible outside of it.

{
    let myName : string = "Muhammad Talha";
    const myId :number = 183;
    console.log(myName);
    console.log(myId);
}

try {
    // console.log(myName) // works fail here
} catch (error){
    console.log("`myName ` is not accessable")
}

try {
    // console.log(myId)// works fail here
} catch (error){
    console.log("`myName ` is not accessable")
}