// a();
// b();

// 1. function statement declaration
function a() {
    console.log("a is called")
}

a();

// 2. function expression
const b = function () {
    console.log("b is called")
}

b();

// 3. anonymous function use where function are used as value
// function () {

// }

// output :- Uncaught SyntaxError: Function statements require a function name


// 4. named function expression

// 5. difference between parameters & arguments

const c = function (para1, para2) {
    console.log(para1, para2);
}

c("argumet1", "argument2")

// 6. first class function :- the ability to use function as value and pass the arugment of the function and reuse of the another function

const d = function (para) {
    console.log(para);
}

function xyz() {

}

d(xyz);


// Arrow function

const arrowFunction = () => {
    console.log("arrow function is called");
}

arrowFunction()

// Call back function in Java Script

setTimeout(function () {
    console.log("G is called with timer")
}, 5000)

function e(para) {
    console.log("e is called")
    para()
}

e(function f() {
    console.log("f is called")
})


function eventAddListener() {
    var count = 0;
    document.getElementById('btn-click').addEventListener('click', function () {
        console.log("Button clicked", ++count);
    })
}

eventAddListener();

// Garbage Collection & removeEventListener

