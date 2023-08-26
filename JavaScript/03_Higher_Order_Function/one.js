// console.log('Hello world');

const myArray=[1, 2, 3, 4, 5]

const newArray=myArray.reduce((acc, currval) => acc*currval,1)

// console.log(newArray);
 

function sum(x, y){
    return x+y
}


function subract(x, y){
    return x-y
}

function multiple(x, y){
    return x*y
}

function divide(x, y){
    return x/y
}

function calculateFunction(fn, x, y){
    return fn(x, y)
}

console.log('sum >', calculateFunction(sum, 2, 2));

console.log('subtract >', calculateFunction(subract, 2, 2));

console.log('multiple >', calculateFunction(multiple, 2, 2));

console.log('divide >', calculateFunction(divide, 2, 2));