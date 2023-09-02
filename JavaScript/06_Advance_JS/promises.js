// const promiseOne= new Promise(function(resolve, reject){
//     setTimeout(function(){
//       console.log('Async is consumed');
//         resolve()
//     },2000)
// })

// promiseOne.then(function(){
//      console.log('promises is resolved');
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('async is consumed');
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log('promises is resolved');
// })

const promiseThree= new Promise(function(resolve, reject){
    setTimeout(function(){
         resolve({
            name:'Deepanshu',
            age:26,
            email:'deep56@gmail.com'
         })
    },1000)
})

promiseThree.then(function(user){
console.log(user);
})