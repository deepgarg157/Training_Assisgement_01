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

function retive(arr, n=1){
    if(n<=arr.length){
        for(var i=0; i<n; i++){
            console.log(arr[i])
        }
    }else{
        console.log(n + " " + "element of array length jada hai")
    }
}

retive([1,2,3,4,5], 1)

// 17. output 

for(var i=0; i<10 ; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}

// output : 10

// 18. 

for(let i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}

// output: 0,1,2,3,4,5,6,7,8,9

