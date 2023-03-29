// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));


// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));


// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));


// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "Sentence");
console.log(strings);

// For Adding in the beginning 
// console.log(strings.splice(0, 0,"called", "Sentence" ))

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
 console.log(strings.join(" "));

// - Remove the first word in the array (strings)
console.log(strings.unshift());
// Other Method
//strings.slice(0, 1)

// - Find all the words that contain 'is' use string method 'includes'
let allIs = strings.filter((string) => 
  string.includes("is")
)
console.log(allIs);
// - Find all the words that contain 'is' use string method 'indexOf'

// We have written indexOf !== -1, because if it does not found the particular character it returns -1.
let allIs1 = strings.filter((string) => 
  string.indexOf("is") !== -1
)
console.log(allIs1);


// - Check if all the numbers in numbers array are divisible by three use array method (every)

let divisibleByThree = numbers.every((num) => {
  num % 3 === 0
}
)
console.log(divisibleByThree);

// -  Sort Array from smallest to largest
let ascending = numbers.sort((a, b) => {
  return a - b 
}
)
console.log(ascending);

// Descending 
/*let descending = numbers.sort((a, b) => {
  return b - a
}
)
console.log(descending);
*/

// - Remove the last word in strings
console.log(strings.pop());

// - Find largest number in numbers
 let largest = numbers.sort((a, b) => a - b).pop()
console.log(largest);
// - Find longest string in strings
// Firstly short the Array , then find the last one by pop
let longestString = strings.sort((a, b) => a.length - b.length).pop()
console.log(longestString)

// - Find all the even numbers
let evenNum = numbers.filter((num) => 
num % 2 === 0
)
console.log(evenNum)

// - Find all the odd numbers
let oddNum = numbers.filter((num) => 
num % 2 === !0
)
console.log(oddNum)


// - Place a new word at the start of the array use (unshift)
strings.unshift("Aditi");
console.log(strings)

// - Make a subset of numbers array [18,9,7,11]


// - Make a subset of strings array ['a','collection']



// - Replace 12 & 18 with 1221 and 1881


// - Replace words in strings array with the length of the word
 


// - Find the sum of the length of words using above question



// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'



// - Create new array with only first name



// - Create new array with all the full names (ex: "Joe Blogs")



// - Sort the array created above alphabetically



// - Create a new array that contains only user who has at least one vowel in the firstname.
 


