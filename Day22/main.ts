// Create a function inside an object that returns the objects own name property using the this keyword.

const myDetail ={
    name : "talha",
    age : 19,
    id : 183,
    getName : function(){
        return this.name
    }
}
console.log(myDetail.getName());

// Modify a method in an object to use the this keyword to access another property in the same object.

const rectangle = {
    width : 7,
    height : 5,
    getCalcu : function(){
        return this.width * this.height
    }
}
console.log(rectangle.getCalcu());


// Explain how the this keyword changes its value when used inside a nested function within a method.

const myObj = {
    property : "Value",
    outerFunction : function (){
        console.log(this.property);

        const InnerMethod = ()=>{
            console.log(this.property);
            
        }
        InnerMethod()
        
    }
}
 
myObj.outerFunction();