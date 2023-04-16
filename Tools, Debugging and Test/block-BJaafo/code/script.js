// #### Get full name

function fullName (firstname = "", lastname = ""){
return firstname + " " + lastname;
}


let result = fullName("Aditi", "Dubey")
let expected = "Aditi Dubey"

// Writing Test
if (result !== expected){
    throw new error(`${result} is not equal to ${expected}`);
}


// #### Calculate total amount

function totalAmount (amount = 0, taxRate = 0){
    return (`${amount} + (${amount} * ${taxRate}) `)
}

let result1 = totalAmount(1000, 5)
let expected1 = 6000;


// Writing Test
if (result !== expected){
    throw new error(`${result} is not equal to ${expected}`);
}