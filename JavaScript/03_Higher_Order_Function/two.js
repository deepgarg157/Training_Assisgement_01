const numbers = [1, 2, 4, 5, 6, 7, 8, 9]

// map method in higher order function
const output=numbers.map(sum)
// console.log(output);

// const output1=numbers.map((sum)=>sum+2)
  
//  console.log(output1);

function sum(x){
return x+2
}


// filter method in higher order function
const output2=numbers.filter(value)

// console.log(output2);

function value(x){
    return x>6
}

// reduce method in higher order function

const output3=numbers.reduce(fnReduce)

console.log(output3);

function fnReduce(acc, currVal){
    console.log(acc, currVal);
    return acc+currVal
}