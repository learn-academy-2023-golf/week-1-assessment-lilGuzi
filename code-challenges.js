// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
//combine the two arrays 
//return the length of the combined arrays
//.length to get the legnth 
//.concat to combine the two arrays 
// make the new combined array a new var
// use the new combined array to get length


console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))

var comboArr = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(comboArr.length)


// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
// reverse the letters of the string
// use .reverse
// at this point i was lost for like 30 mins trying different things then gave in and looked at notes. 
//create a new variable 
//.split the string
// .reverse to reverse the split string 
//.join to bring it back together
//console.log

var arrReversed = currentCohort.split("").reverse().join("")
console.log(arrReversed)


// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
//log only the odd numbers
// use a loop aka .for
// use an if/else to filter the odd numbers out
//console.log the odd numbers

for (let count = 0; count < stockExchange.length; count++) {
    if(stockExchange[count] % 2 == 1) {
        console.log(stockExchange[count])
    } else if (stockExchange[count] % 2 === 0){
    } else { 
        console.log(stockExchange[count])
    }

}

