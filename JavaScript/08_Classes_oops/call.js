function setUserName(username){
this.username=username
console.log('called');
}

function createUser(username, email, password){
    setUserName.call(this, username)
this.email=email
this.password=password
}

const newUser= new createUser('Deep', 'deep@gmail.com', 123)
console.log(newUser);