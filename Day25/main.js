// Write a JavaScript object and convert it into a JSON string.
var javaScriptObject = {
    name: "talha",
    age: 19,
    city: "Karachi"
};
var jasonObj = JSON.stringify(javaScriptObject);
console.log(jasonObj);
// Take a JSON string and parse it into a JavaScript object.
var jason = "{ \"name\": \"zain\",\"age\" : 19, \"city\" : \"Karachi\"}";
var javaObj = JSON.parse(jason);
console.log(javaObj);
// Explain how you can format a JSON string with proper indentation for readability.
var obj = {
    name: "waqar",
    age: 20,
    city: "karachi"
};
var convertStr = JSON.stringify(obj, null, 2);
console.log(convertStr);
