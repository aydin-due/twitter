const User = require('./../models/user')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "sin bio")
    }
}

module.exports = UserService