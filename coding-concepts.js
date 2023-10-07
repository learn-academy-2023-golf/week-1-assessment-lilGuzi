// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
 console.log(cohort.length)

// a) Your answer: it will log the length of the string which is 10
// b) Verify and explain: my answer was right .length returns the number of elements in an array which is calculated by the last element in the array plus one.

// --------------------2) What will this log?

const greeting = "Hello World!"
 console.log(greeting[4])

// a) Your answer: the command will log the 4th index in the string which is "o"
// b) Verify and explain: my answer was right, will retrieve the value of the specified index in the square bracket

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 console.log(languages[index])

// a) Your answer: this will log "Ruby"
// b) Verify and explain: my answer was right will retrieve the value in the array of the specified index in the square bracket which in this case "index" equal 1

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: will turn the entire array uppercase
// b) Verify and explain: my answer was wrong. got an error because the string would have to be turned into an array, modified and then be turned back into a string to work

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 console.log(typeof dataTypes.length)

// a) Your answer: honestly have no clue what this would do
// b) Verify and explain:will return the type of data that is output by the .length command which would give a number which is a type of data 
