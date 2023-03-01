// What will be the output of the following code with reason (write the error message if any)

{
  let username = 'John';
}
console.log(username);

// username is not defined at ...It is not in the scope.

// What will be the output of the following code with reason (write the error message if any)
{
  var username = 'John';
}
console.log(username);

// John

// What will be the output of the following code with reason (write the error message if any)
{
  const username = 'John';
}
console.log(username);

// username is not defined at .... It is not in the scope.

// What will be the output of the following code with reason (write the error message if any)
{
  let num = 21;
}
let secondNum = 200;
function add() {
  return num + num2;
}
console.log(add());

//  num is not defined in function.It is in the block.

    
// What will be the output of the following code with reason (write the error message if any)
{
  var num = 21;
}
let secondNum = 200;
function add() {
  return num + num2;
}
console.log(add());

// num2 is not defined at ...

// What will be the output of the following code with reason (write the error message if any)
for (let i = 0; i < 20; i++) {
  //
}
console.log(i);
// i is not defined at ...

// What will be the output of the following code with reason (write the error message if any)
for (var i = 0; i < 20; i++) {
  //
}
console.log(i);

// 20

// What will be the output of the following code with reason (write the error message if any)
for (const i = 0; i < 20; i++) {
  //
}
console.log(i);

//  Assignment to constant variable is not possible, can't change or iterrate over them
  

// What will be the output of the following code with reason (write the error message if any)
if (true) {
  let user = 'John';
}
console.log(user);

//  user is not defined at ...
    

// What will be the output of the following code with reason (write the error message if any)
if (true) {
  var user = 'John';
}
console.log(user);

// john

// What will be the output of the following code with reason (write the error message if any)
if (true) {
  const user = 'John';
}
console.log(user);

// //  user is not defined at ...

// What will be the output of the following code with reason (write the error message if any)
if (true) {
  const number = 21;
  console.log(number++);
}

//  Assignment to constant variable is not possible, can't change or iterrate over them

// What will be the output of the following code with reason (write the error message if any)
if (true) {
  const number = 21;
  console.log((number += 21));
}

//  Assignment to constant variable is not possible, can't change or iterrate over them


// What will be the output of the following code with reason (write the error message if any)
function first() {
  let one = 1;
  function second() {
    let two = 2;
    return one + two;
  }
}

console.log(first());



// What will be the output of the following code with reason (write the error message if any)
function first() {
  let one = 1;
  function second() {
    let two = 2;
    return one + two;
  }
  second();
}

console.log(first());




// What will be the output of the following code with reason (write the error message if any)
function first() {
  let one = 1;
  function second() {
    let two = 2;
  }
  second();
  return one + two;
}

console.log(first());



// What will be the output of the following code with reason (write the error message if any)
function first() {
  let one = 1;
  function second() {
    let two = 2;
    return one + two;
  }
  return second();
}

console.log(first());



// What will be the output of the following code with reason (write the error message if any)
function first() {
  let one = 1;
  function second() {
    let two = 2;
    let one = 100;
    return one + two;
  }
  return second();
}

console.log(first());



// What will be the output of the following code with reason (write the error message if any)
let three = 300;
function first() {
  let one = 1;
  let three = 3;
  function second() {
    let two = 2;
    let one = 100;
    return one + two + three;
  }
  return second();
}

console.log(first());



// What will be the output of the following code with reason (write the error message if any)
let three = 300;
function first() {
  let one = 1;
  let two = 2;
  function second() {
    let one = 100;
    return one + two + three;
  }
  return second();
}

console.log(first());