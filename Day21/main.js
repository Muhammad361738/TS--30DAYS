// Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
function skipNumber() {
    for (var i_1 = 1; i_1 <= 10; i_1++) {
        if (i_1 === 5) {
            continue;
        }
        console.log(i_1);
    }
}
skipNumber();
// Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
var i = 10;
while (i >= 1) {
    if (i === 5) {
        continue;
    }
    console.log(i);
    i--;
}
// Create a loop that iterates through a string and stops when it finds the first vowel.
// function checkVowel (str : string):void{
//     const vowel= "aeiouAEIOU";
//     for (let char of str){
//         if(vowel.includes(char)){
//         console.log(`First vowel found${char}`);
//         break;
//         }
//         console.log(char);
//     }
// }
// checkVowel("swzcdcv")
// This function iterates through a string and logs each character 
// until it finds a vowel
function logUntilVowel(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("First vowel found: ".concat(char));
            break; // Stops the loop at the first vowel found
        }
        console.log(char);
        // Logs each character until a vowel is encountered
    }
}
logUntilVowel("syzygy");
