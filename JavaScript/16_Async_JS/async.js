// sync in java script is that run one by one of complete task
// example

// console.log("hey 1");
// console.log("hey 2");
// console.log("hey 3");
// console.log("hey 4");

// async in java script is that run all the task once, and which one is complete first it give response 
// example

// console.log("hey 1");
// console.log("hey 2");
// setTimeout(function(){
//     console.log("hey 3");
// },3000)
// console.log("hey 4")

// java script is a sync 

// promises

const promiseOne = new Promise(function(resolve, reject){
    if(true){
      return  resolve()
    }
    else{
        return reject()
    }
})

promiseOne.then(()=>{
    console.log("resolve")
})
.catch(function(){
    console.log("reject")
})

// output - resolve


const promiseTwo = new Promise(function(resolve, reject){
    var n=Math.floor(Math.random()*10 +1);
    if(n<5){
        return resolve()
    }
    else{
        return reject()
    }
})

promiseTwo.then(()=>{
    console.log("number is below than 5")
})
.catch(()=>{
    console.log("number is above than 5")
})

// output - number is below than 5

// this is promise chaning
// sbse pehle ghar pr aao
// fir gate khaoo aur ander aaojao
// fir khana banao aur khalo
// fir so jao

var ans1= new Promise(function(res, rej){
    return res("sbse pehle ghgar pr aao")
})

var ans2=ans1.then(function(data){
    console.log(data)
    return new Promise(function(res, rej){
        return res("fir gate khaoo aur ander aaojao")
    })
})

var ans3=ans2.then(function(data){
    console.log(data)
    return new Promise(function(res, rej){
        return res("fir khana banao aur khalo")
    })
})

const ans4=ans3.then(function(data){
    console.log(data)
    return new Promise(function(res, rej){
        return res("fir so jao")
    })
})

ans4.then(function(data){
    console.log(data)
})


// aysnc await in java script

async function abcd(){
   let response= await fetch("https://jsonplaceholder.typicode.com/photos/")
   let data = await response.json()
   console.log(data)
}

abcd()