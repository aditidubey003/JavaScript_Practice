function test(messgae,callback){
    try {
        callback();
        console.log(`✅`,messgae);
    } catch (error) {
        console.error(error);
        console.log(`❌`,messgae);
    }
}

function add(numA = 0, numB = 0){
    return numA + numB;
}

function testAdd(){
     result = add(3,6);
     expected = 9;
     if(result !== expected)
     throw new Error(`${result} is not equal to ${expected}`)
}

test(`adding 3 and 6`,testAdd);

function multiply(numA = 0, numB = 0){
    return numA * numB;
}

function testMultiply(){
     result = multiply(3,6);
     expected = 18;
     if(result !== expected)
     throw new Error(`${result} is not equal to ${expected}`)
}

test(`multiply 3 and 6`,testMultiply);
