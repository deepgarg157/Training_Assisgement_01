function printme() {
    // console.log(this);
}

printme()

const obj={
    name:"Deepanshu",
    age:26,
    printme(){
        console.log('my name is' + ' '+ this.name)
    }
}

const obj1={
    name:'Deepanshu Garg',
    age:25
}

obj.printme()
obj.printme.call(obj1)






// this command in the java script

console.log(this) 
// output - window

function abcd(){
    console.log(this)
}

abcd()

// output - window

var obj2 = {
    abcd:function(){
        console.log(this)
    }
}

obj2.abcd()

// output - object




// call, apply, bind

// call method in the java script
 function Call(){
        console.log(this.age)
    }


let objCall ={
    age:27
}

Call.call(objCall)

// apply method in the java script

function apply(para1, para2, para3){
    console.log(this.age, para1, para2, para3)
}

let objApply={
    age:27
}

apply.apply(objApply, [1, 2, 3])

// bind method in the java script

function bind(){
    console.log(this.age, this.name)
}

let objBind ={
    age:27,
    name:"Deepanshu"
}

var bind1=bind.bind(objBind)
bind1()


// this normal example

function xyz(){
    this.name="Deepanshu"
    this.surName="Garg"
}

var xyz1=new xyz()
console.log(xyz1)