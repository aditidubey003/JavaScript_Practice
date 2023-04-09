// Write a function to check whether input value is a string or not.

function isString (val){
    return typeof(val) === 'string';
}

// Test
console.log(isString('tony stark')); // true;
console.log(isString([1, 2, 4, 0])); // false;
console.log(isString(true)); // false

// Write a function to check whether a string is blank or not.

function isBlank (string) {
return string.length === 0;
} 

// Another Method
// let isBlank = (val) => !Boolean( val.length);

// Test
console.log(isBlank('')); // true;
console.log(isBlank('abc')); // false;


// Write a function to split a string and convert it into an array of words.

function stringToArray (string){
    return string.split(' ');
}


// Test
console.log(stringToArray('Hello World')); // ["Hello", "World"];
console.log(stringToArray('Lady Bird')); // ["Lady", "Bird"];

// Write a function to return specified number of characters from a string.
function truncate (string, number){
    return string.slice(0, number)
}


// Test
console.log(truncate('John Snow', 4)); // "John";
console.log(truncate('Baby Elephant', 7)); // "BabyEle";

// Write a function to convert a string name in abbreviated form


// Test
console.log(abbrevName('Robin Singh')); //"Robin S."
console.log(abbrevName('John Snow')); //"John S."

/*
// Write a function to hide email addresses to protect from unauthorized user.

// Test
console.log(protect('johnS@example.com')); // "john...@example.com"
console.log(protect('arya_stark@example.com')); // "arya...@example.com"


// Write a function to hide email addresses to protect from unauthorized user. The number of dots should be same as length of left characters.

// Test
console.log(protect('johnS@example.com')); // "john.@example.com"
console.log(protect('arya_stark@example.com')); // "arya......@example.com"

// Write a function to parameterize a string.


// Test
console.log(parameterize('John Snow from Winterfell')); // "john-snow-from-winterfell"
console.log(parameterize('Arya Stark from Winterfell')); // "arya-stark-from-winterfell"

// Write a function to capitalize the first letter of a string.

// Test
console.log(capitalizeFirst('we are learning')); // "We are learning"
console.log(capitalizeFirst('learning Javascript')); // "Learning Javascript"


// Write a function to capitalize the first letter of each word in a string.

// Test
console.log(capitalizeWords('we are learning')); // "We Are Learning"
console.log(capitalizeWords('learning javascript')); // "Learnign Javascript"


// Write a function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.

// Tets
console.log(swapcase('AaBbc')); // "aAbBC"
console.log(swapcase('abcDef')); // "ABCdEF"

// Write a function to convert a string into camel case.

console.log(camelize('hello world')); // "helloWorld"
console.log(camelize('main exercise')); // "mainExercise"

// Write a function to uncamelize a string (output should be all in lowercase)

// Tets
console.log(uncamelize('helloWorld', '_')); // "hello_world"
console.log(uncamelize('learningJavascript', '_')); // "learning_javascript"
console.log(uncamelize('learningJavaScriptAgain', '_')); // "learning_java_script_again"



// Write a function to concatenates a given string n times (default is 1).

// Test
console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"
console.log(repeat('Ha!')); // "Ha"

// Write a function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with ("…") (by default) or specified characters.

// Test
console.log(textTruncate('We are doing JS string exercises.', 15, '!!')); //"We are doing !!"
console.log(textTruncate('We are doing JS string exercises.', 15)); //"We are doing ..."

// Write a function to chop a string into chunks of a given length.

// Test
console.log(stringChop('hello world', 2)); // ["he", "ll", "o ", "wo", "rl", "d"]
console.log(stringChop('hello')); // ["h", "e", "l", "l", "o"]

// Write a function to count the occurrence of a substring (case doesn't matter) in a string.

// Test
console.log(count('The quick brown fox jumps over the lazy dog', 'the')); // 2
console.log(count('hello again hello', 'hello')); // 2
console.log(count('hello', 'one')); // 0

// Write a function to strip leading and trailing spaces from a string.

// Test
console.log(strip('   Hello World ')); // "Hello World"
console.log(strip('Hello World      ')); // "Hello World"

// Write a function to truncate a string to a certain number of words.

// Test
console.log(chopWords('The quick brown fox jumps over the lazy dog', 4)); // "The quick brown fox"
console.log(chopWords('I am learning JavaScript', 4)); // "I am learning JavaScript"


// Write a function to reverse an string

// Test
console.log(alphabetize('United States')); // 'setatS detinU'
console.log(alphabetize('Hello World')); // 'dlroW olleH'


*/