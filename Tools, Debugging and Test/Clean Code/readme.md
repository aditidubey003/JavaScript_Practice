// Clean Code
Refactor the code below following the guidelines:

1. const car = {
  carMake: 'Honda',
  carModel: 'Accord',
  carColor: 'Blue',
};

function paintCar(car) {
  car.carColor = 'Red';
}

// Solution
Problem is unecessary content

const car = {
  make: 'Honda',
  model: 'Accord',
  color: 'Blue',
};

function paintCar(car) {
  car.color = 'Red';
}


2. let pi = 3.14;

let area = 2 * pi * 21;

console.log(area);


// Solution
Problem is that the value of pi is constant so we should use const instead of let.

const pi = 3.14;

let area = 2 * pi * 21;

console.log(area);




3. function addingTwoNumbers(numA, numB) {
  return numA + numB;
}

addingTwoNumbers(100);
addingTwoNumbers(100, 200);



// Solution
Problem is lack of default Parameters


 function addingTwoNumbers(numA = 0, numB = 0) {
  return numA + numB;
}

addingTwoNumbers(100);
addingTwoNumbers(100, 200);

