// Use console.time to find the time taken by the execution of the code below.

console.time("timeTaken")
for (let i = 0; i < 1000000000; i++) {
    //
}
console.timeEnd("timeTaken")

// timeTaken: 1112.025146484375 ms


// Use console.group for grouping multiple console.log
console.group();
console.log('Aditi');
console.log('Dubey');
console.log('Hello world');
console.groupEnd();

console.group('Group') 
console.log('a');
console.log('b'); 
console.log('c');
console.log('d');
console.group('Group')

// Use console.log with the %c placeholder to change the font size to 30px, color to tomato and background to black.

console.log("Hello %cAditi", "font-size : 30px; color : tomato; background-color: black" )

// Use console.dir to display the object representation of a function
console.log(document.location)

// Use console.table to display the variable named people given below in table form

let people = [
    {
      name: 'Eddard Stark',
      description:
        'Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark',
    },
    {
      name: 'Benjen Stark',
      description: "Brother of Eddard Stark - First ranger of the Night's Watch",
    },
    {
      name: 'Robb Stark',
      description: 'Son of Eddard and Catelyn Stark - Direwolf: Grey Wind',
    },
    {
      name: 'Sansa Stark',
      description: 'Daughter of Eddard and Catelyn Stark - Direwolf: Lady',
    },
  ];
  

  console.table(people);


  // Use console.count to display how many times the loop given below will run.

for (let i = 0; i < 100; i++) {
  //
}

// Learn about console.trace and use it on a function
function one (){
  two()
}
function two (){
  three()
}
function three (){
 console.trace()
}
one()