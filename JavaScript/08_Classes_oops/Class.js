class user {
    constructor(n){
        this.name=n
    }

    buy(){
        console.log("Hello World!");
        console.log(this.name);
    }
}

let newUser = new user("Deepanshu")

console.log(newUser);
newUser.buy()