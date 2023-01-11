// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = Number(prompt ("Enter your number"));
if (number%2 == 0){
  alert("number is even");
} else {
  alert("number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = Number(prompt ("Enter number 1"));
let num2 = Number (prompt("Enter number 2"));
if (num1 > num2 ){
  alert(`${num1} is greater`)
} else {
  alert (`${num2} is greater`);
}


// 3. Convert the above code using`?` terniary operator


num1 > num2 ?
alert(`${num1} is greater`)
:
alert(`${num2} is greater`)


4. /*Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"*/

  //By else if
let houseName = (prompt("What is your House name ?"));
if (houseName ==="stark"){
alert ( " Winter is coming");
} else if (houseName === "lannister"){
  alert ( " A lannister always pays his debt");
} else {
  alert(" All men must die");
}



// 5. Convert the above code using`?` terniary operator
houseName ==="stark" ? alert ( " Winter is coming") : houseName === "lannister" ? alert (" A lannister always pays his debt"): alert (" All men must die");


// Switch
switch (houseName)  {
  case houseName ==="stark":
  alert ( " Winter is coming");
  break;
  case houseName === "lannister":
  alert (" A lannister always pays his debt");
  break;
  alert (" All men must die");
}






// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthName = string(prompt("Enter the month name."));

switch (monthName) {
  case "January":
    alert("It has 31 days");
    break;
  case "February":
      alert("It has 28 days");
      break;
  case "March":
    alert("It has 31 days");
    break;
  case "April":
      alert("It has 30 days");
      break;
  case "May":
    alert("It has 31 days");
    break;
  case "June":
      alert("It has 30 days");
      break;
  case "July":
    alert("It has 31 days");
    break;
  case "August":
    alert("It has 31 days");
    break;
  case "September":
      alert("It has 30 days");
      break;
  case "October":
    alert("It has 31 days");
    break;
  case "November":
      alert("It has 30 days");
      break;
  case "December":
    alert("It has 31 days");
    break;
  default:
      alert("not a valid input");

}

 

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = Number(prompt("Enter your salary"));
switch (true) {
 case salary <= 20000:{
  let taxAmount = (salary*10)/100 ;
  alert (`Your in-hand amount is ${salary-tax}`);
  break;}
  case salary <= 40000:{
  let taxAmonut = (salary*20)/100 ;
  alert (`Your in-hand amount is ${salary-tax}`);
  break;}
  case salary > 50000:{
  let taxAmount = (salary*30)/100 ;
  alert (`Your in-hand amount is ${salary-tax}`);
  break;}
  default:
    alert("Not a valid input");

}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

/*If else*/
let marks = Nummber (prompt("Enter your marks."));
if (marks > 100){
  alert ("Marks can't be greater than 100");
}else if (marks > 80 && marks < 100){
  alert ("Grade A");
} else if (marks > 50 && marks < 80) {
  alert ("Grade B");
} else if (marks > 30 && marks < 50){
  alert ("Grade C");
} else if (marks > 0){
  alert ("Grade D");
} else {
  alert ("Enter a valid number");
}




/*Switch*/
//We cannot use relational expressions in switch case.
switch (True){
  case marks > 100 :
    alert ("Marks can't be greater than 100"); 
    break;
  case marks > 80 && marks < 100 :
    alert ("Grade A");
    break;
  case marks > 50 && marks < 80 :
    alert ("Grade B");
    break;
  case marks > 30 && marks < 50 :
    alert ("Grade C");
    break;
  default :
  alert ("Enter a valid number");
}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt ("What is the weather like outside?");

if (weather==="sunny"){
alert ("Wear a T-shirt");
} else if (weather==="sunny"){
  alert ("Don't forget to take your raincoat");
} else if (weather===hot) {
  alert ("Get a hanky");
} else if (weather=== "Get your sweater on") {
  alert ("Get your sweeter on");
} else {
  alert ("Not a alid output");
}


