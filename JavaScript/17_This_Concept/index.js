// this concept
'use strict'

// global object

console.log(this)

// function this

function x() {
    console.log(this)
}

window.x()

// object this concept

const student = {
    name: 'Deepanshu',
    printName: function (age) {
        console.log(`hello ${this.name} ${age}`)
    }
}

student.printName(28)

// another object
const student2 = {
    name:'Rahul',
}

student.printName.call(student2, [27])

// Arrow function this concept

function xyz(){
    const arrowFn = ()=>{
        console.log(this)
    }
    arrowFn()
}

window.xyz()
