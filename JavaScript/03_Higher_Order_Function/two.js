const numbers = [6, 8, 4, 1, 3, 7, 2, 9]

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

// console.log(output3);

function fnReduce(acc, currVal){
    console.log(acc, currVal);
    return acc+currVal
}

// sort method in higher order function

const output4=numbers.sort().reverse()

console.log(output4);