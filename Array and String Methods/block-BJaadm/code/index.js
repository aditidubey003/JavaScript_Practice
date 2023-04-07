let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of name key from persons array
let peopleName = persons.map((person)=> person.name)
console.log(peopleName);
// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map((person)=> person.grade)
console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((person)=> person.sex)
console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filtered = peopleName.filter((name) => {
 return  name[0] === 'J' ||
  name[0] === 'P' 
})
console.log(filtered);

// Another Approach 
let filterd = peopleName.filter((name) => name.startsWith('J') ||  name.startsWith('P') )
console.log(filterd);



// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filterdLength = peopleName.filter((name) => name.startsWith('A') ||  name.startsWith('C') )
console.log(filterdLength.length);


// Log all the filtered male ('M') in persons array
let male = persons.filter((person) => person.sex === "M") 
console.log(male);

// Log all the filtered female ('F') in persons array
let female = persons.filter((person) => person.sex === "F") 
console.log(female);

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let filteredFemale = persons
.filter((person) => person.sex === "F")
.filter((person)=>
 person.name.startsWith("C")  
  || person.name.startsWith("J") ) ;
console.log(filteredFemale);

// Another Approach
/*let filteredFemale = persons
.filter((person) => person.sex === "F")
.filter
((person)=> person.name[0] === "C"  || 
 person.name[0] === "J");
console.log(filteredFemale);*/

// Another Approach
/*let filteredFemale = female.filter((female) => {
  return female.name.startsWith("C") ||
  female.name.startsWith("J")
})
console.log(filteredFemale);*/

// Log all the even numbers from peopleGrade array
let even = peopleGrade.filter((grade) => grade % 2 === 0)
console.log(even);

// Find the first name that starts with 'J' in persons array and log the object
// WE use Find because we need to log the first name with the required condition.
let jName = persons.find((person) => 
 person.name.startsWith("J"))
console.log(jName);

// Another Approach
/*let jName = persons.filter((person) => 
 person.name[0] === "J")

console.log(jName)*/

// Find the first name that starts with 'P' in persons array and log the object
let pName = persons.find((person) => 
 person.name[0] === "P")

console.log(pName);


// Find the first name that starts with 'J', grade is greater than 10 and is a female
let required = persons.find(
  (person) => 
person.name.startsWith('J') &&
person.sex === "F" && 
person.grade > 10)

console.log(required);

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) => person.sex === 'F')
console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array

let malePersons = persons.filter((person) => person.sex === 'M')
console.log(malePersons);

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, cv) => acc + cv,
 0)
console.log(gradeTotal);

// Another Approach
/*let gradeTotal = persons.filter((person)=> person.grade).reduce((acc, cv) => acc + cv,
 0)
console.log(gradeTotal);
*/

// Find the average grade
let averageGrade = gradeTotal/ peopleGrade.length
console.log(averageGrade);

// Find the average grade of male
let males = persons.filter((person) => person.sex === 'M')
// console.log(males);
let grades = males.map((person) => person.grade)
// console.log(grades);
let maleGrade = grades.reduce((acc, cv) => acc + cv)/ grades.length
 console.log(maleGrade);


// Wrong
/*let avgGradeMale = persons
.filter((person) => 
person.sex === 'M' && 
person.grade)
.reduce((acc, cv) =>
acc = acc + cv , 0)
console.log(avgGradeMale);*/

// Find the average grade of female
let females = persons.filter((person) => person.sex === 'F')
// console.log(females);
let grade = females.map((person) => person.grade)
// console.log(grade);
let femaleGrade = grade.reduce((acc, cv) => acc + cv)/ grades.length
 console.log(femaleGrade);


// Find the highest grade
let highestGrade = [...peopleGrade].sort((a, b) => a - b ).pop()
console.log(highestGrade)

// Find the highest grade in male
let highestMaleGrade = grades.sort((a, b) => a - b).pop()
console.log(highestMaleGrade);

// Better Approach
let male1 = persons.filter((person) => person.sex === 'M')
console.log(male1)
let grade1 = male1.map((person) => person.grade)
console.log(grade1)
let highestMaleGrade1 = grade1.sort((a, b) => a - b).pop()
console.log(highestMaleGrade1);



// Find the highest grade in female
let highestFemaleGrade = grade.sort((a, b) => a - b).pop()
console.log(highestFemaleGrade);

// Find the highest grade for people whose name starts with 'J' or 'P'
// Simple Method
let people = persons.filter((person) => 
person.name.startsWith('J') || 
person.name.startsWith('P'))
console.log(people)

let peoplesGrade = people.map((person) => person.grade)
console.log(peoplesGrade)

let highestPeopleGrade = peoplesGrade.sort((a, b) => a - b).pop()
console.log(highestPeopleGrade)

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
let ascendingOrder = peopleGrade.sort((a, b) => a - b)
console.log(ascendingOrder)



//Yes

// Sort the peopleGrade in descending order
let descendingOrder = peopleGrade.sort((a, b) => b - a)
console.log(descendingOrder)

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let descendingOrder1 = [...peopleGrade].sort((a, b) => b - a)
console.log(descendingOrder)

// Sort the array peopelName in ascending `ABCD..Za....z`
let sortedArray = peopleName.sort()
console.log(sortedArray)

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

let sortedArray1 = [...peopleName].sort()
console.log(sortedArray1)
