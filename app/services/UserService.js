const User = require('./../models/user')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "sin bio")
    }

    static getInfo(user){
        return [user.id, user.username, user.name, user.bio]
    }

    static updateUserUsername(user, newUsername){
        user.username = newUsername
    }
}

module.exports = UserService