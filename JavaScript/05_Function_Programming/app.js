// High order function
// forEach, map, filter, reduce, every, find, sort

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

const prices=[1000, 1500, 2000, 2500, 3000]

const output=[]

prices.map((items)=>{
    output.push(items/2)
})

console.log(output);