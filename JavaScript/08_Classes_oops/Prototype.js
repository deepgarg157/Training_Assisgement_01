// This is Syntax for create new prototype

const userString='Deepanshu     '
// console.log(userString.length);

String.prototype.trueLenght=function(){
    console.log(this);
    console.log(`lenght of my userString: ${this.trim().length}`);
}

userString.trueLenght()