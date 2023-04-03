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
let ascending = [...numbers].sort((a, b) => {
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
 let largest = [...numbers].sort((a, b) => a - b).pop()
console.log(largest);
// - Find longest string in strings
// Firstly short the Array , then find the last one by pop
let longestString = [...strings].sort((a, b) => a.length - b.length).pop()
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
console.log(numbers.slice(3,7));

// - Make a subset of strings array ['a','collection']
console.log(strings.slice(2,5));

// - Replace 12 & 18 with 1221 and 1881

//numbers.splice(numbers.indexOf(12),1,1221);
//numbers.splice(numbers.indexOf(18),1,1881);

//Better Approach
console.log(
  numbers.map((num) => {
if(num === 12){
  return 1221;
} else if(num === 18){
  return 1881;
}else {
  return num;
}
})
);
// - Replace words in strings array with the length of the word
 let myLength = console.log(strings.map((string) => string.length), "mylength");


// - Find the sum of the length of words using above question
/*let sum = myLength.forEach(element => {
  sum = 0;
  return sum += element;
});
console.log(sum);*/

/*myLength.reduce((acc, cv) =>{
  acc = acc + cv
  return acc;
},0);
*/

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let filteredCustomer = customers.filter((customer) => 
  customer.firstname.startsWith('J')
)


// - Create new array with only first name
// We have used Map because we need to get the same length of output, and every onject contains firstname.
let customerFirstname = customers.map((customer) =>
 customer.firstname
)
console.log(customerFirstname)


// - Create new array with all the full names (ex: "Joe Blogs")
let customerFullname = customers.map((customer) =>
 `${customer.firstname} ${customer.lastname}`
)
console.log(customerFullname)

// - Sort the array created above alphabetically

// [...customerFullname].sort();


// - Create a new array that contains only user who has at least one vowel in the firstname.
 let filterVowel = customers.filter((customer) =>{
  if(customer.firstname.toLowerCase().includes('a') ||
  customer.firstname.toLowerCase().includes('e') ||
  customer.firstname.toLowerCase().includes('i') ||
  customer.firstname.toLowerCase().includes('o') ||
  customer.firstname.toLowerCase().includes('u') 
  ){
   return true;
  } else{
   return false;
  }
 }
 )
 console.log(filterVowel)