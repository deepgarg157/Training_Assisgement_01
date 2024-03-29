// 1. Reverse the string 

var str = "Deep";
var newStr = str.split("").reverse().join("")
console.log(newStr)

// 2. A given is Array or not

function arrayFind(elem) {
    return Array.isArray(elem)
}

console.log(arrayFind([]))
console.log(arrayFind({}))

// 3. Given array and put empty inside the array

let arrayNumber = [1, 2, 3, 4, 5]

arrayNumber.length = 0;
console.log(arrayNumber)

// 4. A given number is integer or not

function findInteger(num) {
    if (num % 1 === 0) {
        console.log("Is a integer")
    } else {
        console.log("Not !")
    }
}

findInteger(12.5)

// 5. add the array [1,2,3,4,5,1,2,3,4,5]

let arr1 = [1, 2, 3, 4, 5]
let newArr1 = arr1.concat(arr1)

console.log(newArr1)


// 6. function question, Reverse the given number

function reverseNumber(num) {
    return Number(num.toString().split("").reverse().join(""))
}

console.log(reverseNumber(1234))

// another way to solve problem number 6

function reverseNumber1(num) {
    var rev = 0
    while (num > 0) {
        let rem = num % 10
        rev = rev * 10 + rem;
        num = Math.floor(num / 10)
    }
    return rev;
}

console.log(reverseNumber1(123456))

// 7. write a javascript function that checks whether a passed string is palindrome or not

function strPalindrome(str1) {
    var newstr1 = str1.split("").reverse().join("")

    if (str1 === newstr1) {
        console.log("is palindrome string")
    } else {
        console.log("is not a palindrome")
    }
}

strPalindrome("poop")
strPalindrome("loop")

// 8. write a java script function that returns a passed string with letters in alphabetical order

function strAlphabetical(str) {
    return str.split("").sort().join("");
}

console.log(strAlphabetical("apple"))

// 9. write a java script function that accepts a string as a parameter and converts the first letter of eacg word of the string in uppercase

function strUpperCase(str) {
    var allWords = str.split(" ").map((words) => {
        return words.charAt(0).toUpperCase() + words.substring(1)

    })

    return allWords.join(" ")
}

console.log(strUpperCase("deepanshu bhai kaise ho"))

// 10. write a JavaScript function to get the number of occurrences of each letter in specified string

function occStr(str) {
    var occurrences = {}
    str.split("").forEach(function (item) {
        if (occurrences.hasOwnProperty(item) === false) {
            occurrences[item] = 1;
        } else {
            occurrences[item]++;
        }
    })
    return occurrences

}

console.log(occStr("apple"))

// 11. Loops, loop an array and add all members of it

let arr = [1, 2, 3, 4, 5, 6]

let newArr = arr.reduce((acc, currentVal) => acc + currentVal, 0)

console.log(newArr)

// 12. in an array of numbers and strings, only add those members which are not strings

let arr2 = [123, "deep", "deepanshu", "ankit", 4, 5, "aayush"]

var sum = 0

arr2.forEach(function (elem) {
    if (typeof elem === 'number') {
        sum = sum + elem
    }
})

console.log(sum)

// 13. loop an array of objects and remove all objects which don't have gender's value male

var arrObj = [
    {
        name: "Deep", gender: "male"
    },
    {
        name: "akanshi", gender: "female"
    },
    {
        name: "deepanshu", gender: "male"
    },
    {
        name: "ankit", gender: "male"
    },
]

var newArray = arrObj.filter((item) => item.gender === 'male')
console.log(newArray)

// 14. Array, write the java script function to clone an array

function cloneArr(arr) {
    return [...arr]
}

var abcd = [1, 2, 3, 4]
console.log(cloneArr(abcd))

// another way to solve the problem no 14

function cloneArr1(arr) {
    var newArr = []
    arr.forEach(function (e) {
        newArr.push(e)
    })

    return newArr;
}

console.log(cloneArr1([2, 5, 7, 4, 7, 3]))

// another way to solve the problem no 14 through map function

function cloneArr2(arr) {
    return arr.map(function (e) {
        return e;
    })
}

var newArr2 = cloneArr2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

console.log(newArr2)


// 15. write the java script function that tell the type of of the function parameters

function typeTeller(para) {
    return typeof para
}

console.log(typeTeller("deep"))
console.log(typeTeller(7))
console.log(typeTeller(true))
console.log(typeTeller(undefined))
console.log(typeTeller(null))
console.log(typeTeller(234567890))
console.log(typeTeller([]))
console.log(typeTeller({}))
console.log(typeTeller(function () { }))

// 16.  write the java script function to get the first element of an array , passing a parameters 'n' will return the first 'n' elements of the array...

function retive(arr, n = 1) {
    if (n <= arr.length) {
        for (var i = 0; i < n; i++) {
            console.log(arr[i])
        }
    } else {
        console.log(n + " " + "element of array length jada hai")
    }
}

retive([1, 2, 3, 4, 5], 1)

// 17. output 

for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}

// output : 10

// 18. 

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}

// output: 0,1,2,3,4,5,6,7,8,9

// 19. Closure problem 

const sum = function (a) {
    console.log('hello closure', a)

    var b = 4
    return function (c) {
        return a + b + c;
    }
}

const store = sum(7)
console.log(store(2))


// 2. problem in closure function

const addSum = function (a, b, c) {
    console.log(a + b + c)

    return {
        getSumOfTwo: function () {
            return a + b
        },
        getSumOfThree: function () {
            return a + b + c
        }
    }
}

const store1 = addSum(1, 2, 3)
console.log(store1.getSumOfTwo())
console.log(store1.getSumOfThree())


// Rest and Spread operator

// rest example
function addSum1(a, b, c, ...others) {
    console.log(others)
    console.log(a + b + c + others[0] + others[1])
}

addSum1(1, 2, 3, 4, 5)

// spread operator in array

var arr3 = ['deep', 'deepanshu', 'yash', 'rahul']

console.log(arr3)
console.log(...arr3)
console.log([...arr3, 'ankit'])
console.log(arr3)

// rest and spread in object

const obj1 = {
    name: 'deep',
    age: 27,
    email: 'deep123@gmail.com'
}

const { name, ...rest } = obj1

console.log(rest)


// call, apply, bind
function obj2() {
    console.log(`hello ${this.name}`)
}

const call = {
    name: 'deepanshu'
}

obj2.call(call)


// convert Array into Object

const arrObj = [1, 2, 3, 4, 5]

const convert = arrObj.reduce((acc, currVal) => {
    const result = { ...acc, [currVal]: currVal }
    return result

}, {})

console.log(convert)

// output {1: 1, 2: 2, 3: 3, 4: 4, 5: 5}

// spread concept in object

const obj3 = {
    name: 'deepanshu',
    age: 27
}
console.log({ ...obj3, 'email': 'deep@gmail.com' })
console.log(obj3) // dont change in the original object through spread operation method use......


foo()

function foo() {
    console.log('calling foo')
}

foo()


// closure ==========================

function outer(a, b) {
    var x = 10;
    return function inner() {
        console.log(x + a + b)
    }

}

const result = outer(1, 3)
result()
// ==================================

for (var i = 1; i <= 3; i++) {
    function cal(i) {
        setTimeout(() => {
            console.log(i)
        }, 1000);
    }
    cal(i)
}

// output was 1 2 3 


// map, filter, reduce

const array1 = [1, 2, 3, 4, 5]

var resArr = []
for (let i = 0; i < array1.length; i++) {
    resArr.push(array1[i] * 2)
}
console.log(resArr)

// to over come this logic of for loop we can use map in array to return the updated array

const resArr1 = array1.map((value) => value * 2)
console.log(resArr1)


// question
var a = 20
function foo() {
    console.log(a)
    var a = 10
}

foo() // undefined

// question
a = []
b = []
console.log(a === b) // false

a = {}
b = {}
console.log(a === b) // false


const arr4 = [0, 10, 20, 30, 40]

const res = arr4.filter((value) => value < 30)
console.log(res)

// question

myFun()

var myFun = function () {
    console.log('first called')
}

myFun()

function myFun() {
    console.log('second called')
}

myFun()

// ==================
var a = 10
{
    var a = 20
}

console.log(a)
// ==================

// ==================
function outer() {
    function inner() {
        console.log(x)
    }
    const x = 10
    return inner
}

const inner = outer()
inner()

// output = 10
// ==================

// ==================
for(var i=0; i<3; i++){
    function value(i){
        setTimeout(() => {
            console.log(i)
        }, i*1000);
    }
    value(i)
}
// ==================

// ==================
function foo(){
    return new Promise((resolve, reject) =>{
        reject('hello world')
    }) 
 
}

async function res(){
    try {
        const res = await foo()
        console.log(res)
    } catch (error) {
        console.log(error)
    }
  
}

res()
// ==================

function outer(){
    
    inner()
    console.log(x)
    function inner(){
        var x=5
    }
}

outer()


//  ===================
async function foo(){
    return 'hello world'
}

async function abc(){
    const result2 = await foo()
    console.log(result2)
}

abc()
//  ===================

// ====================
const str2 = 'i am deepanshu'
const newStr = str2.split(' ')

const newStr2 = newStr.map((char, i) => {
    return char[0].toUpperCase() + char.slice(1)
})

console.log(newStr2)
// ====================

