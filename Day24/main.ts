import Add from "./function"
//Explain how to export a function from one JavaScript file and import it into another file.
import { add } from "./function"
 console.log(Add(15,25));
 console.log(add(25,35));

//  Create two modules; one that exports a class, and another that imports the class and creates an instance.

import { Person } from "./function";

const talha = new Person("Talha");

talha.greet();

// Discuss the difference between default and named exports in JavaScript modules.





 
 