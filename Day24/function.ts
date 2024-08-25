export default Add

function Add (num1 : number, num2 : number ): number{
    return num1 + num2
}

export const add = (a : number, b: number): number=> a + b


// Create two modules; one that exports a class, and another that imports the class and creates an instance.

export class Person {
    name : string ;
    constructor(name :string){
        this.name = name
    }
    greet(){
        console.log(`Hello my Name is : ${this.name}`);
        
    }
}