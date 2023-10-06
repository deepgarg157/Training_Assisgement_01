// High order function
// forEach, map, filter, reduce, every, find, sort, compare

// let arrayOfObject=[
//     {
//         name:'javaScript'
//     },
//     {
//         name:'c'
//     },
//     {
//         name:'python'
//     },
//     {
//         name:'c++'
//     }
// ]

// arrayOfObject.forEach((items, index)=>{
//     // console.log(items);
//     // console.log(items.name);
//     console.log(`items name: ${items.name}`, `position ${index}`);
// })

// const prices=[1000, 1500, 2000, 2500, 3000]

// const output=[]

// prices.map((items)=>{
//     output.push(items/2)
// })

// console.log(output);

const prices = [1000, 100, 1500, 150, 2000, 2500, 3000]

const newPrices = prices.sort(function (a, b) {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    return 0
})

console.log(newPrices);




// This is called the function programming
const radius = [2, 3, 5, 7, 9]

const area = function (radius) {
    return Math.PI * radius * radius
}

const circumference= function (radius){
    return Math.PI*2*radius;
}

const calculate = function (radius, logic) {
    let output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference))
