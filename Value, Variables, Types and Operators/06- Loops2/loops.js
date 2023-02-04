//Loops
//For Loop
/*In the for loop there are always 3 conditions in which the first one is 
- initializing the value
- condition (where to stop)
- do after each iteration
*/
//For printing numbers from 10 to 0
for(let i = 10; i >= 0; i--){
console.log(i);
}

// For printing all the even numbers from 1 to 10
for(let i = 1; i < 10; i++){
    if(i %2 == 0){
   console.log(i);
    }
}

// For printing all the odd numbers from 1 to 10
for(let i = 1; i < 10; i++){
    if(i %2 !== 0){
   console.log(i);
    }
}

//For printing all the odd numbers from 1 to 10 in reverse manner
for (let i = 10; i > 0; i--){
    if (i %2 !==0){
console.log(i);
    }
}

// For Printing my name 5 times
for (let i = 0; i < 5; i++){
console.log("My name is Aditi");
}


//While loop
/*In the While loop , there is always a single condition which the loop follows
if the condition is true the loop will follow otherwise it will break */

// For loggin all the no's between 1 to 10

let i = 1;
while(i < 10){
console.log(i);
i++
}


// For logging all the even numbewrs from 1 to 10

let a = 1;
while(a < 10){
    if (a %2 == 0){
        console.log(a);
    }
    a++
}


// For getting the multiply of Numbers from  1 to 10

let multiplication = 1;
for (let i = 1; i <= 10; i++){
multiplication = multiplication * i;
}
console.log(multiplication);