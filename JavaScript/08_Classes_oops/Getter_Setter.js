class user{
    constructor(username, password){
        this.username=username
        this.password=password
    }

    get username(){
        return this._username
    }

    set username(value){
        this._username=value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password=value.toUpperCase()
    }
}

const newUser= new user('Deep', 'abc')
console.log(newUser.password);
console.log(newUser.username);

