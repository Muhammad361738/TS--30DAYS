// Write a loop that logs numbers from 1 to 10 to the console.
for (let i = 0 ; i <=10 ; i++){
    console.log (i);
}

// Create a while loop that logs `Hello, World!` 5 times.

let i = 0;
while (i<5){
    console.log("Hello World !");
    i++
}
// Use a for...of loop to iterate through an array of your favorite movies and log each one.

let myMovies : string[] = [
    "Herry Potter",
    "Avengers",
    "Mission Impossible",
    "Commando",
    "The HoBBit"];

for (let Movies of myMovies){
    console.log(Movies);
}