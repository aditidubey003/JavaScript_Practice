
//Practice file of (.fill, .slice, ,splice, .includes, .toString) Method

//Array.fill Method
const colors = ['Red', 'Blue', 'Green', 'Yellow', 'White'];

console.log (colors.fill(1));
console.log(colors);

console.log (colors.fill("Pink", 1,4));
console.log(colors);

//Array.Slice() Method
const name1 = ['Aditi', 'Muskan', 'Ayush', 'Aditya', 'Deeksha'];

console.log (name1.slice(1,3));
console.log (name1.slice(2));

// Slice with Negative index

const name2 = ['Aditi', 'Muskan', 'Ayush', 'Aditya', 'Deeksha'];

console.log (name2.slice( -1));
console.log (name2.slice(-3,-1));


//Array.Splice() Method
const name3 = ['Aditi', 'Muskan', 'Ayush', 'Aditya', 'Deeksha'];

console.log (name3.splice(1,3));
console.log(name3);

console.log (name3.splice(1,4));


console.log (name3.splice(1,2,"Niket"));
console.log(name3);

//Array.includes() Method
const number1 = [1,2,3,4,5,6];
console.log(number1.includes(5,4));
console.log(number1);

//Array.toString() Method
const number2 = [1,2,3,4,5,6];
console.log(number2.toString());
console.log(number2);

const array2 = [1, 2, true, 'hello','Aditi'];
console.log(array2.toString());
console.log(array2);


