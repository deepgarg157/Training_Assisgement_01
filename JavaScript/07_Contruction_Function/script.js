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

