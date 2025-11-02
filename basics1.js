// ---------------------------------------------
// Array Operations and String Manipulation in JavaScript
// ---------------------------------------------

// Create an array with 10 empty slots
var marks = Array(10);

// Reassign 'marks' with predefined values
var marks = [20, 30, 40, 50, 60];
console.log(marks[2]); // Access element at index 2 → Output: 40

// Update an element at a specific index
marks[3] = 14; 
console.log(marks); // Updated array: [20, 30, 40, 14, 60]

// Get the total number of elements in the array
console.log(marks.length); // Output: 5

// Add a new element at the end of the array
marks.push(65);
console.log(marks); // Output: [20, 30, 40, 14, 60, 65]

// Remove the last element from the array
marks.pop();
console.log(marks); // Output: [20, 30, 40, 14, 60]

// Add a new element at the beginning of the array
marks.unshift(6);
console.log(marks); // Output: [6, 20, 30, 40, 14, 60]

// Find the index of a specific element
console.log(marks.indexOf(65)); // Output: -1 (not found, since 65 was removed)

// Check if a value exists in the array
console.log(marks.includes(65)); // Output: false

// Get a subarray (slice from index 2 to 4 → excluding index 5)
let submarks = marks.slice(2, 5);
console.log(submarks); // Output: [30, 40, 14]

// ---------------------------------------------
// Iterating Over Arrays
// ---------------------------------------------

// Using a for loop to print each element
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

// ---------------------------------------------
// Summing Array Elements
// ---------------------------------------------

// Method 1: Using a for loop
var sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
console.log(sum); // Output: Total sum of all elements

// Method 2: Using reduce()
console.log(marks.reduce((sum, mark) => sum + mark, 0));

// ---------------------------------------------
// Filtering and Transforming Arrays
// ---------------------------------------------

var scores = [12, 13, 14, 16];
var evenScores = [];

// Filter even numbers manually using a for loop
for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0) {
        evenScores.push(scores[i]);
    }
}
console.log(evenScores); // Output: [12, 14, 16]

// Use filter() to get odd numbers in one line
const oddScores = scores.filter(score => score % 2 !== 0);
console.log(oddScores); // Output: [13]

// Map example: Multiply each even score by 3
let mappedArray = evenScores.map(score => score * 3);
console.log(mappedArray); // Output: [36, 42, 48]

// ---------------------------------------------
// Using Method Chaining (filter → map → reduce)
// ---------------------------------------------

var newScores = [2, 4, 5, 6, 7, 8];
var result = newScores
    .filter(score => score % 2 == 0)   // Keep even numbers
    .map(score => score * 3)           // Multiply each by 3
    .reduce((total, score) => total + score, 0); // Sum all values

console.log(result); // Output: 60

// ---------------------------------------------
// String Manipulation
// ---------------------------------------------

let date = '23';
let nextDate = '27';

// Convert string values to integers and find difference
let difference = parseInt(nextDate - date);
console.log(difference); // Output: 4

// Concatenate strings
let day = "tuesday";
let newDay = day + " is Funday";
console.log(newDay); // Output: "tuesday is Funday"

// Find index of a substring
let val = newDay.indexOf("day");
console.log(val); // Output: 2 (index of first occurrence)
