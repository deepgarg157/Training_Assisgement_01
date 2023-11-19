// 

let numbers = [1, 2, 3, 4]

console.log(numbers);

numbers.push(8)

console.log(numbers);

numbers.unshift(0)

console.log(numbers);

let lastNumber = numbers.pop()

console.log(numbers);
console.log(lastNumber);

let firstNumber = numbers.shift()

console.log(numbers);
console.log(firstNumber);

numbers.splice(4, 1)

console.log(numbers);

// Shopping List

// object of array
let list = [
    { text: 'milk', cost: 4, need: false },
    { text: 'bread', cost: 14, need: true },
    { text: 'butter', cost: 5, need: true },
    { text: 'bacon', cost: 7, need: false },
    { text: 'biscuit', cost: 15, need: true },
]

let html = ''
let total = 0

// for loop condtion

// for (let index = 0; index < list.length; index++) {
//     console.log(list[index]);
//     if (list[index].need) {
//         html += `<li>${list[index].text}</li>`
//         total += list[index].cost
//         console.log(total);
//     }

// }

// while loop conditon

// let index=0
// let item
// while(item =list[index++]){
//     if (item.need) {
//                 html += `<li>${item.text}</li>`
//                 total += item.cost
//                 console.log(total);
//             }

// }

// forEach loop

// list.forEach((item) => {
//     if (item.need) {
//         html += `<li>${item.text}</li>`
//         total += item.cost
//         console.log(total);
//     }
// })

list.forEach(({text}) => {
    // if (need) {
        html += `<li>${text}</li>`
        // total += cost
        console.log(total);
    // }
})

// for of

// for([index, {text, cost, need}] of list.entries()){
//     if (need) {
//         html += `<li>${index} ${text}</li>`
//         total += cost
//         console.log(total);
//     }
// }

// sorting in array

// let newArray=[1, 5, 6, 2, 8]

// const AA=newArray.sort().reverse();

// console.log(AA);

list.sort((a, b)=>{
      if(a.cost == b.cost) return 0;
      if(a.cost > b.cost) return -1;
    
      return 1;
})

// 0, a === b, there is no chnages
// -1, a sorted before b
// 1, b sorted before a

document.getElementById('list').innerHTML = html

// document.getElementById('cost').innerHTML = `$${total}`



// Searching & finding the index of the array

let arrayList=[
    'milk',
    'bacon',
    'bread',
    'butter',
    'biscuit',
    {text: 'bread', cost: 34}
]

console.log(arrayList.indexOf('butter'));

console.log(arrayList.lastIndexOf('biscuit'));

console.log(arrayList.findIndex((item)=>item.text === 'bread'));

let output=[]
let count=1

// function fizzBuzz(){

// if(output % 3===0){
//     output.push('fizz');
// }else{
//     output.push(count)

// }
output.push(count)
count++
// }

// fizzBuzz()

console.log(output);


const newArray = [
    ["deep" , 'Deepanshu', 27]
]

console.log(newArray[0].length)