// Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value.
//  Then, update its value within the same function and log both the initial and updated values.

function assigning (){
    let myNum : number = 183;
    console.log("Initial value is ", myNum);
    myNum = 200;
    console.log("my final value is ", myNum)
}
assigning();

// Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables `a = 5` and `b = 10`, 
// then swap their values so that `a` becomes `10` and `b` becomes `5`
function  swapIng (){
    let myName = "183";
    let myId = "talha";
    let MyNum;
    console.log("Brfore swaping myName is  "+myName + " my id is "+myId);

MyNum  =  myName
myName = myId;
myId = MyNum;
console.log("After swaping myName is  "+myName + " my id is "+myId);

}
swapIng();

// Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. 
// Start with `x = 4` and perform a series of operations (addition, subtraction, multiplication, division) 
// on `x` using compound operators.
function compoundVariable (){
    let x = 6;
    console.log(`compound value is `,x);
    
    x +=5 ;
    
    console.log(`After addition ` ,x);
    x-=3;
    console.log(`after Subtraction `, x);
    x*=4;
    console.log(`after multiplication ` , x);
    x/=2;
    console.log(`After division `,x);
}
compoundVariable();