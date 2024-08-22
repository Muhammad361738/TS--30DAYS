// Write a function that returns the current date in the format `DD-MM-YYYY`.

function getCurrentDate (){
    const now = new Date();
    const day = String (now.getDate()).padStart(2,"0");
    // Ensure the day is two digits 
    const month = String (now.getMonth() + 1).padStart(2,"0");
    // add 1 because month is 0 index 
    const year = now.getFullYear();
    return `${day}-${month}-${year}` 

}
console.log(getCurrentDate());
// Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysUntiNewYear (){
    const today = new Date();

    const newYear = new Date(today.getFullYear() +1 , 0 , +1);

    const diff = newYear.getTime() - today.getTime()
    const days = Math.ceil(diff/(1000 *60 *60 * 24));
    return days
}

console.log(daysUntiNewYear());

// Generate a date object representing your next birthday and log it to the console.
function getNextBrithDay (month :number, day: number ): Date{
    const today = new Date();
     let year = today.getFullYear()

     const birthday = new Date(year , month -1 , day);
     if (birthday <today ){
        birthday.setFullYear(year+1);
     }
     return birthday
}

const nextBirthday = getNextBrithDay(4,11);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
