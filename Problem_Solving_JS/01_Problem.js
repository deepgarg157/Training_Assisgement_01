const arr = [2, 7, 11, 5];

const target = 13;

function findSumOfNumber(array, target) {
    for (let i = 0; i < array.length; i++) {
        const num1 = array[i];
        for (let j = i+1; j < array.length; j++) {
            const num2 = array[j];
            if (num1 + num2 === target) {
                return [num1, num2];
            }

        }

    }
    return null;
}

const output=findSumOfNumber(arr, target)

console.log(`final target value ${output}` , output);




// Problem code based question on java script

// Write a JavaScript program to reverse a given string.
const reverseString = (str) => str.split('').reverse().join(''); 

console.log(reverseString("Deepanshu"));

// otherway to solve reverse of a given string:
function reverseString2(str){
    let reverse=""

    for(let i=str.length-1; i>=0; i--){
        reverse+=str[i]
    }
    return reverse
}

console.log(reverseString2("Deep"));



// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers

const arr1 = [1, 2, 3, 4, 5, 6]
function evenNumberReturn(value){
     return value.filter(val=> val%2==0)
}

let newArray=evenNumberReturn(arr1)
console.log(newArray);




// Write a JavaScript program to calculate the factorial of a given number. 

// take input from the user
// const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
// if (number < 0) {
//     console.log('Error! Factorial for negative number does not exist.');
// }

// if number is 0
// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }

// if number is positive
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(`The factorial of ${number} is ${fact}.`);
// }




// program to check if a number is prime or not

// take input from the user
// const number1 = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// check if number is equal to 1
// if (number1 === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number1 > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number1; i++) {
//         if (number1 % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number1} is a prime number`);
//     } else {
//         console.log(`${number1} is a not prime number`);
//     }
// }

// check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }



// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 


function sentenceCase(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
 
    return str.replace(/\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() +
                txt.substr(1).toLowerCase();
        });
}
 
console.log(sentenceCase('geeks for geeks'));

// an array n the spread object
const arr2 = [1,2,3,4]
const obj = {...arr2}

console.log(obj)