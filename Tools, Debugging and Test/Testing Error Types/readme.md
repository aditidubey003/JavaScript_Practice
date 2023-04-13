// Testing error types

For the given code below write the error message and the type of error that will be thrown. Also write the reason for the error.


let num = if(true){
  return 21;
}

// Sol
Uncaught SyntaxError: Unexpected token 'if'
We can not write if or any kind of statement on the right hand side of any variable.


function add(a, b){
  return a + b;
}
add(21, if(){});

// Sol
Uncaught SyntaxError: Unexpected token 'if'
we can't pass if statement as an argument



console.log(superHeroName);

// Sol
 Uncaught ReferenceError: superHeroName is not defined
// Here we have not declared the superhero variable.



let user = {
  name: 'John',
};

user();

// Sol
 Uncaught TypeError: user is not a function
// Here, user is not a function so we can't call it. It is Object


let num = 100;

num();

// Sol
Uncaught TypeError: num is not a function
// Here, num is not a function


const arr = [1, 2, 3, 5];
arr.length = 100 * 90;

// Sol



function main() {
  console.log(adminUser);
}

main();

// Sol
Uncaught ReferenceError: adminUser is not defined
// Here, adminUser is not defined in the function.



let user Name = "John";
console.log(user Name);

// Sol
Uncaught SyntaxError: Unexpected identifier 'Name'
// Here, userName is the correct way to declare a varaible.



let age = 100;

age.toUpperCase();

// Sol
 Uncaught TypeError: age.toUpperCase is not a function
// 





let username = 'Arya Stark';

username.map(() => {});

// Sol
Uncaught TypeError: username.map is not a function
map is a method of array not string


function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

let arya = fullName('Arya', lastName);

// Sol
 Uncaught ReferenceError: lastName is not defined
  lastName is out of scope