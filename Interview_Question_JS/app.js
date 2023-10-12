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

//    another way to solve problem number 6

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
var allWords = str.split(" ").map((words)=>{
  return words.charAt(0).toUpperCase() + words.substring(1)
   
})

return allWords.join(" ")
}

console.log(strUpperCase("deepanshu bhai kaise ho"))

// 10. write a JavaScript function to get the number of occurrences of each letter in specified string

