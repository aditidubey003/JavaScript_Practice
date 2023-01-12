// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.
Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(number){
  return String(number);
  }
  
  convertToString();

// - Write a Function Expression
let convertToString = function (number){
  return String(number);
  }

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (number) => String(number);

// - Write an Arrow Function with curly brackets
let convertToString = (number) => {
  return String(number);
};


// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
 let output = convertToString(21);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n){
  return ++n;
}


// - Write a Function Expression
let addOne = function(n){
  return ++n;
}

// - Write an Arrow Function without curly brackets(if possible)
let addOne = (n) => ++n;

// - Write an Arrow Function with curly brackets
let addOne = (n) => {
  return ++n;
}


// - Execute the function

addOne(5);

// - Execute the function and store the return value in a variable.
let result = addOne(5);


// - What is the typeof returnValue
//typeof returnValue is "number"

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(num){
return --num;
}


// - Write a Function Expression
let substractOne = function(num){
  return --num;
}


// - Write an Arrow Function without curly brackets(if possible)
let substractOne = (num) => --num



// - Write an Arrow Function with curly brackets
let substractOne = (num) =>{
  return --num;
}



// - Execute the function

substractOne(5);

// - Execute the function and store the return value in a variable.
let subtaction = substractOne(5);


// - What is the typeof returnValue
//typeof returnValue is "number"


/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA, numB){
return numA + numB;
}


// - Write a Function Expression
let sum = function(numA, numB){
  return numA + numB;
}


// - Write an Arrow Function without curly brackets(if possible)
let sum = (numA, numB) => numA+ numB


// - Write an Arrow Function with curly brackets
let sum = (numA, numB) =>{
  return numA + numB;
}




// - Execute the function

sum(3,4);

// - Execute the function and store the return value in a variable
let add = sum(3,4);
// - What is the typeof returnValue
//typeof returnValue is "number"


/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(num){
return num*num;
}


// - Write a Function Expression
let Square = function(num){
return num*num;
}


// - Write an Arrow Function without curly brackets(if possible)
let square = (num) => num*num;


// - Write an Arrow Function with curly brackets
let square = (num) =>{
  return num*num;
  }
  



// - Execute the function

square(5);

// - Execute the function and store the return value in a variable

let squareOfNuber = square(5);

// - What is the typeof returnValue
//typeof returnValue is "number"


/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y){
  if(x > y){
return true;
  } else {
    return false;
  }
}


// - Write a Function Expression
let isGreater = function(x, y){
  if(x > y){
  return true;
    } else {
      return false;
  }
}


// - Write an Arrow Function without curly brackets(if possible)

let isGreater = (x, y) => (x > y) ? true : false;
// - Write an Arrow Function with curly brackets
let isGreater = (x, y) => {
  if(x > y){
  return true;
    } else {
      return false;
  }
}


// - Execute the function

isGreater(6,2);

// - Execute the function and store the return value in a variable
let greaterNum = isGreater(6,2);
// - What is the typeof returnValue
//typeof returnValue is "boolean"


/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(n){
  if (n % 2 === 0){
 return `number is even`;
  } else{
   return `number is odd`;
  }
 }

// - Write an anonymous Function Expression
let oddOrEven = function(n){
  if (n % 2 === 0){
    return `number is even`;
     } else{
      return `number is odd`;
     }
}


// - Write an named Function Expression
let oddOrEven = function oddOrEven(n){
    if (n % 2 === 0){
      return `number is even`;
       } else{
        return `number is odd`;
       }
}


// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (n) => (n % 2 === 0)? `number is even` : `number is odd`;

// - Write an Arrow Function with curly brackets
let oddOrEven = (n) =>{
    if (n % 2 === 0){
      return `number is even`;
       } else{
        return `number is odd`;
       }
   }


// - Execute the function

oddOrEven(5);

// - Execute the function and store the return value in a variable
let oddNumber = oddOrEven(5);


// - What is the typeof returnValue
//typeof returnValue is "string"

