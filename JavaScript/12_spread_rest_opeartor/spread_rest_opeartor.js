// spread and rest opeartor in java script

let array1=["audi", "BMW", "MG"];
let array2=["ferrai", ...array1]

console.log(array2);



let obj1={
    name:"Deepanshu",
    age:26
}

let obj2={
    ...obj1,
    email:"deepgarg78@gamil.com"
}

console.log(obj2);


// rest example in java script

function sumAdd(a,b,c,...other){
    console.log(other)
    console.log(other[0])
    console.log(arguments)
    return a+b+c;
}

const result = sumAdd(1,2,3,4,5,6);
console.log(result)

// spread operator in java script

const arr =["ankit", "deep", "akshay"]

function spread(name1, name2, name3){
  console.log(name1, name2, name3)
}

spread(arr[0], arr[1], arr[2])
spread(...arr) // best to use ES6 in the java script......
spread(arr)


// object ka use in rest 

const info = {
    name : "Deepanshu",
    age : 26,
    email : ["deep@123" , "ankit@123"]
}

info.city = "budhana"

console.log(info.name)
console.log(info['name'])
console.log(info.city)

const {age,...rest} = info; // D structure

console.log(age, rest)

// object ka use => spread

const userInfo = {
    name : "Deep",
    age : 27,
    email :"Deepanshu@12345"
}

const userInfo1 = {
    ...userInfo,
    number : 123
}

console.log(userInfo1)