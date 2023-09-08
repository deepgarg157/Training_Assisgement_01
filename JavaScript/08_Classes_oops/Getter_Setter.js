class user{
    constructor(username, password){
        this.username=username
        this.password=password
    }
}

const newUser= new user('Deep', 1234)
console.log(newUser.password);