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