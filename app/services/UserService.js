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

    static getAllUsernames(users){
        var usernames=[]
        users.forEach(element => { usernames.push(element.username) });
        return usernames
    }
}

module.exports = UserService