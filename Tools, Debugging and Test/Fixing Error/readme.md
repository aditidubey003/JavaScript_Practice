Fixing Error
What's the type of error in the given code below. Explain what can fix the issue and fix it.

"use strict"
function sayHello(){
  console.log(`Hello ${username}`);
}
sayHello();

// Reference Error because username is not defined.

function sayHello(){
    try {
      console.log(`Hello ${username}`);
    } catch (error) {
       alert(error);
    }

}
sayHello();

let getUsername = "John";

function sayHello(){
  getUsername();
}
sayHello();

// Refernce Error getUsername is not a function.

sayHello();

let getUsername = "John";

function sayHello(){
 try {
getUsername();
} catch (error){
    alert(error)
}
 } 
sayHello();

let username = if(true){}

// Syntax error, Unexpected token if, because we can not place if xpression on the rioght side of the variable.

let userInfo = {name: "John", age: 23};

console.log(userInfo.getName());

// Reference error, getName is not an function

let userInfo = [1, 2, 3, 4, 5];

userInfo.length = 67 ** 5
// Range error, Invalid length because the length is not in the scope.


lett userInfo = "John";

console.log(userInfo);

// Syntax erroe, lett is not defined

let isAdult = true;

console.log(isAdult.slice(1));

// Reference Error, isAdult is not an function