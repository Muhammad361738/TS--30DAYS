// Write a JavaScript object and convert it into a JSON string.

const javaScriptObject = {

    name : "talha",
    age : 19,
    city : "Karachi"
}

const jasonObj = JSON.stringify(javaScriptObject);

console.log(jasonObj);


// Take a JSON string and parse it into a JavaScript object.

const jason = `{ "name": "zain","age" : 19, "city" : "Karachi"}`; 

const javaObj = JSON.parse(jason)

console.log(javaObj);



// Explain how you can format a JSON string with proper indentation for readability.

const obj = {
    name : "waqar",
    age : 20,
    city : "karachi"
}

const convertStr = JSON.stringify(obj,null,2)

console.log(convertStr);

