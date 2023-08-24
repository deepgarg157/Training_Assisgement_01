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

let list = [
    { text: 'milk', cost: 4, need: false },
    { text: 'bread', cost: 14, need: true },
    { text: 'butter', cost: 5, need: true },
    { text: 'bacon', cost: 7, need: false },
    { text: 'biscuit', cost: 5, need: true },
]

let html = ''
let total = 0

for (let index = 0; index < list.length; index++) {
    console.log(list[index]);
    if (list[index].need) {
        html += `<li>${list[index].text}</li>`
        total += list[index].cost
        console.log(total);
    }

}

document.getElementById('list').innerHTML = html

document.getElementById('cost').innerHTML = `$${total}`