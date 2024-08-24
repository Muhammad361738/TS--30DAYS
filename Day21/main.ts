// Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

function skipNumber (){
    for (let i = 1; i <=10; i++){
        if(i ===5){
            continue;
        }
        console.log(i);
    }
}
skipNumber();

// Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
let i = 10;
while (i>=1){
    if (i===5){
        continue
    }
    console.log(i);
    i--
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

function logUntilVowel(str: string): void {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
      if (vowels.includes(char)) {
        console.log(`First vowel found: ${char}`);
        break; // Stops the loop at the first vowel found
      }
      console.log(char); 
      // Logs each character until a vowel is encountered
    }
  }
  
  logUntilVowel("syzygy");
  