var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push('Papaya');

// Remove the last element from fruits array
 fruits.pop();

// Log the current length of fruits array
console.log(fruits.length);

// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0];
// It leaves space for the deleted element.

// Log the element on index 0 and 1

console.log(fruits[0], fruits[1]);


// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift();

// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.splice(0, 0, 'Guava');
console.log(fruits);

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.splice(0, 0, 'Dragon Fruit');
console.log(fruits);


// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
console.log(fruits.indexOf('Dragon Fruit') === 0, fruits.indexOf('Guava') === 1);

// Other Method 
if (fruits[0] === 'Dragon Fruit' && fruits[1] === 'Guava'){
    console.log(true);
} else{
    console.log(false);
}

// Update the value of index 1 to `Pears`
fruits.splice(0, 1, 'Pears')
// At the Index 0, Deleted 1 Element and replaced with the Pears.

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1, 0, 'Kiwi', 'Lemon');

// Remove (slice) all the element from index 5
console.log(fruits.slice(5));

// Create another array named moreFruits with values ['Berries', 'Melons']

 var moreFruits = ['Berries', 'Melons'];

// Concat moreFruits into fruits array (re-assign so the value gets updated)
// Concat always returns the new array so we always need to reassign the the new value to the fruits.
fruits = fruits.concat(moreFruits);
 console.log(fruits);

// Log the name of all fruit in console
 fruits.forEach((fruit) => console.log(fruit));

// other METhod 
/*fruits.forEach(allFruits);
function allFruits(fruit){
console.log(fruit );
}*/

// Other Method 
/*fruits.forEach(function allFruits(fruit){
    console.log(fruit );
})*/

// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits =  fruits.map((fruit) => fruit.toLowerCase());
console.log(lowercaseFruits);

// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits =  fruits.map((fruits) => fruits.toUpperCase());
console.log(uppercaseFruits);

// Other method 

/*
let uppercaseFruits =[];
fruits.forEach(function(fruit){
    uppercaseFruits.push(fruit.toUpperCase());
});
*/


let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
console.log(numbers.flat(2));

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)

console.log(numbersTwo.flat(2));

// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
 console.log(numbersThree.flat(Infinity));


// Use forEach to log all the elements of numberThree array
// Here, we need to reassign the value of numbersThree again.
numbersThree = numbersThree.flat(Infinity);

numbersThree.forEach((num) => console.log(num));

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let doubleNumbers = numbersThree.map(double)
function double(num){
    console.log(num * 2,  "resultwith2");
}

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers = numbersThree.map(triple)
function triple(num){
    console.log(num * 3,  "resultwith3");
}

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let halfNumbers = numbersThree.map(half)
function half(num){
    console.log(num / 2,  "dividedby2");
}


// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
/*
let oddNumbers = numbersThree.map(odd)
 
let oddArray = [];
function odd(num){
    if(num % 2 === !0){
        oddArray.push(num)
    }
   //  console.log();
}*/

// let oddNumbers1 = numbersThree.map((num) => console.log(num % 3 === !0) )


// ----------------------
// By Filter Method , It returns the shorten array.


let oddNumbers =  numbersThree.filter(isOdd);

function isOdd(num){
    return num % 2 !== 0;
    
}
console.log(oddNumbers);


// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let evenNumbers = numbersThree.filter(
   (num) => num % 2 === 0
)

console.log(evenNumbers);

// Find the index of 10 in numbersThree array
let index = numbersThree.findIndex((num) => num === 10);
console.log(index);

// Other method 
/*let index = numbersThree.find((num) => num === 10);
console.log(index);*/

// Reverse the values of numbersThree array
numbersThree.reverse();


// Reverse the values of numbersTwo array
numbersTwo.reverse();


// Join all fruits with '-', convert to uppercase and log it
console.log(fruits.join('_').toUpperCase());


// Join all fruits with '&', convert to lowercase and log it

console.log(fruits.join('&').toLowerCase());


