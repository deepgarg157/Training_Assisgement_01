// const promiseOne= new Promise(function(resolve, reject){
//     setTimeout(function(){
//       console.log('Async is consumed');
//         resolve()
//     },2000)
// })

// promiseOne.then(function(){
//      console.log('promises is resolved');
// })

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('async is consumed');
        resolve()
    }, 1000)
}).then(function () {
    console.log('promises is resolved');
})