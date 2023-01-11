/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello (name) {
alert(`Hello ${name}`);
}

sayHello('Aditi');
sayHello('papa');

/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function getFullName (firstName, lastName){
return `${firstName} ${lastName}`;
}

getFullName ('Aditi', 'Dubey');
getFullName ('S.K', 'Dubey');

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
function addTwoNumbers (firstNum, secondNum){
  if (isNaN(firstNum) || isNaN(secondNum))
  alert(`Enter Valid Output`);
  else{
    return firstNum + secondNum;
  }
}

addTwoNumbers(12, 56);
addTwoNumbers(17, 55);

/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
function calc (numA, numB, operation){
  if (isNaN(numA) || isNaN(numB))
  alert(`Enter Valid input`);
  else if(operation == 'add'){
    return numA + numB;
  }
  else if(operation == 'sub'){
    return numA - numB;
  }
  else if(operation == 'mul'){
    return numA * numB;
  }
  else if (operation == 'div'){
    return numA / numB;
  }
   else {
    alert(`Enter a valid operation`);
   }   
  }


calc(5, 3, 'add');
calc(3, 7, 'sub');
calc(3, 3, 'mul');
calc(10, 5, 'div');


/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(year){
if (year % 4 == 0) {
return true;
}
else {
  return false;
}
}

isLeapYear (2005);
isLeapYear(2021);
isLeapYear(2000);



//6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.


function getFactorial (num){
let number = +prompt(`Enter a number`);
let factorial = 1; 
for(let i = num; i <= num; i--){
factorial = i*factorial
}
alert(`The factorial of the ${num} is ${factorial}`);
}

getFactorial(6);
getFactorial(10);






//Voting Age
function votingAge(age){
if (age <=0) {
return `age should be more than 0`;
} else if ( age < 18 ){
  return `you are too young to vote`;
} else if ( (age >= 18) && (age <= 65)) {
  return `you are eligible to vote`;
} else if ( age > 65) {
  return ` you are too old to vote`;
} else {
   return `age must be in numbers`;
  }
}

votingAge( 34);
votingAge( 5);