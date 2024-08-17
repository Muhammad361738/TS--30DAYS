// Making Enums for Vehicles: Lets create categories for vehicles like cars, trucks,
//  and motorcycles using enums, and show one example.

enum vehicalType {
    car ,
    Truck,
    motorcycles
}
console.log(vehicalType.Truck)

// Making a Student Template: Create a blueprint for student information, including their name, 
// age, and the classes they are taking, and then fill in this blueprint with an example student.


// herre blue print is interface 
interface Student {
    name : string,
    age : number,
    course :string []
}

let student: Student ={
    name : "Talha",
    age : 19,
    course : ["javaScript","TypeScript","HTML","CSS"]
}
console.log(student);

// Shape Shifter: Write a program that can describe either a circle or a rectangle using a
//  special type alias, including properties unique to each shape
type shape = {
   kind : "rectangle"| "circle",
   radius? : number, 
   height ? : number ,
   width ? : number
}
let circle : shape ={
    kind : "circle",
    radius : 5

}
let rectanglr : shape ={
    kind : "rectangle",
    height : 5,
    width : 4
}
console.log(circle);
console.log(rectanglr);