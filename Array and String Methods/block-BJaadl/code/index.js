let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(array){
return [...array]
.sort((a, b) => a.length - b.length) 
.pop();
}

findLongestWord(words);

// - Convert the above array "words" into an array of length of word instead of word.
let wordsLength = words.map((string) => string.length)
console.log(wordsLength);

// - Create a new array that only contains word with atleast one vowel.
let vowelWord =  words.filter((string) => {
 if(
  string.toLowerCase().includes('a')  ||
  string.toLowerCase().includes('e')  ||
  string.toLowerCase().includes('i')   ||
  string.toLowerCase().includes('o')   || 
  string.toLowerCase().includes('u')
 ) {
  return true
 } else {
  return false
 }
} 
)
console.log(vowelWord);

// - Find the index of the word "rhythm"
console.log(words.indexOf('rhythm'))

// - Create a new array that contains words not containing any vowel.
function noVowel (string){
  if(
    string.toLowerCase().includes  ('a')  ||
    string.toLowerCase().includes('e')  ||
    string.toLowerCase().includes('i')   ||
    string.toLowerCase().includes('o')   || 
    string.toLowerCase().includes('u')
   ) {
    return false
   } else {
    return true
   }
}

let wordsWithoutVowel = words.filter((w) => noVowel(w))
console.log(wordsWithoutVowel);


// - Create a new array that contains words not starting with vowel.

// Better Approach
let noVowelAtStart = words.filter((w) => noVowel(w[0]))
console.log(noVowelAtStart);


// - Create a new array that contains words not ending with vowel
function notEndingWithVowel (string){
  if(
    string.toLowerCase().endsWith('a')  ||
    string.toLowerCase().endsWith('e')  ||
    string.toLowerCase().endsWith('i')   ||
    string.toLowerCase().endsWith('o')   || 
    string.toLowerCase().endsWith('u')
   ) {
    return false
   } else {
    return true
   }
}

let noVowelAtEnd = words.filter((w) => notEndingWithVowel(w))
console.log(noVowelAtEnd);

// Better Approach 
let noVowelAtEnd1 = words.filter((w) => noVowel(w[w.length -1]))
console.log(noVowelAtEnd1);



 let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray (arr){
return arr.reduce((acc, cv) =>{
  acc += cv;
return acc
}, 0)
}

sumArray(numbers);

// Another Method
let sum = numbers.reduce((acc, cv) => {
return acc += cv;
}, 0)

console.log(sum);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multiplyBy3 = numbers.filter((num) => {
  return num % 3 === 0;
})
console.log(multiplyBy3);
// - Create a new array that contains only even numbers
let even = numbers.filter((num) => num % 2 === 0)
console.log(even);

// - Create  a new array that contains only odd numbers.
let odd = numbers.filter((num) => num % 2 !== 0)
console.log(odd);

// - Create a new array that should have true for even number and false for odd numbers.
// Here we are using Map because we need the same length of the output.
let result = numbers.map((num) => num % 2 === 0)
console.log(result);
// - Sort the above number in assending order.
let sortedArray = [...numbers].sort((a, b) => a - b )
console.log(sortedArray);

// - Does sort mutate the original array?

//Yes

// - Find the sum of the numbers in the array.
let totalSum = numbers.reduce((acc, cv) => {
  acc += cv
  return acc;
}, 0)
console.log(totalSum);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers (arr){
return arr.reduce((acc, cv) => {
  acc += cv
return acc 
}, 0)/ arr.length
} 
 averageNumbers(numbers)


let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength (words){
return (
  words
  .map((w) => w.length)
  .reduce((acc, cv) => {
  return acc + cv
},0)/ words.length)
}

// Testing
averageWordLength(numbers)
averageWordLength(strings)