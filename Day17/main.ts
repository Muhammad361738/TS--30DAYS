// Write an if statement that logs `Good Morning` if the current time is before 12 PM.

const checkTime = new Date ();
if (checkTime.getHours() < 12 ){

console.log("Good Morning")
}

// Create a function that assigns a grade (A, B, C, D, F) based on a students score.


function gradingSystem (num :number):string{
    if (num >= 90){
        return "A+"
    }
    else if (num >=80){
    return "A"
    }
    else if(num >=70){
        return "B"
    }
    else if (num >=60){
        return "C"
    }else {
        return "Fail"
    }

}
console.log(gradingSystem(55))
// console.log(gradingSystem(93))


// Use an if-else-if chain to categorize a persons age group (child, teenager, adult).

function checkAge (age : number):string{
if (age <=5){
return "child"

}
else if(age >=5 && age <18){
    return "Teenager"
    
}
else {
    return "Adult"
}

}
console.log(checkAge(5))
// console.log(checkAge(6))
// console.log(checkAge(15))
// console.log(checkAge(18))
// console.log(checkAge(28))