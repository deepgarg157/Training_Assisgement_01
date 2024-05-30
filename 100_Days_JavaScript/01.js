// a question in which you have to find out the greatest string by creating a function find_Largest_String. If there are mulitple largest strings , it will encounter the very first one.

// sort method to find out the result
function find_Largest_String(str) {
    if (str.trim().length === 0) {
        return false
    }

    let words = str.split(' ')
    words = words.sort((a, b) => b.length - a.length)
    // return words.at(-1)
    return words[0]
}

const res = find_Largest_String('My name is Deepanshu Garg')
console.log(res); 


// reduce method to find out the result
function find_Largest_String_reduce(str) {
    if (str.trim().length === 0) {
        return false
    }

    let words = str.split(' ')
    return words.reduce((acc, curr) => curr.length > acc.length ? curr : acc ,'')
}

const res1 = find_Largest_String_reduce('My name is Deepanshu Garg')
console.log(res1); 