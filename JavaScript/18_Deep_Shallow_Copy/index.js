// deep and shallow copy

// =================================

// let obj = {
//     name:'Deep'
// }

// let user = obj
// user.name = 'Deepanshu'

// console.log('object data', obj)
// console.log('user data', user)

// this copy called the memory loaction copy in this change the exist object everything
// =================================

// Shallow copy

// 1. one method of the shallow copy by the Object.assign
// let obj = {
//     name:'Deep'
// }

// let user = Object.assign({}, obj) // this is one method to copy the object by the Object.assign
// user.name = 'Deepanshu'


// console.log('object data', obj)
// console.log('user data', user)


// 2. another method of the shallow copy by the spread operator
// let obj = {
//     name:'Deep'
// }

// let user = {...obj} // this is another method to copy the object by the spread operator
// user.name = 'Deepanshu'


// console.log('object data', obj)
// console.log('user data', user)

// Deep copy

let obj = {
    name:'Deep',
    address:{
        city:'budhana'
    },
    getData: function(){
        return 'all the data'
    }
}

// let user = JSON.parse(JSON.stringify(obj))
let user = _.cloneDeep(obj)
user.address.city = 'noida'
user.name = 'Deepanshu'


console.log('object data', obj)
console.log('user data', user)