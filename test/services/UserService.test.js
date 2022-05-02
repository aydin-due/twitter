const User = require('../../app/models/user')
const UserService = require('./../../app/services/UserService')

describe('Test for UserService', () => {
    test("1. Create new user using UserService", () => {
        const user = UserService.create(1, "aydin-due", "aydin")
        expect(user.id).toBe(1)
        expect(user.username).toBe("aydin-due")
        expect(user.name).toBe("aydin")
        expect(user.bio).not.toBeUndefined()
    }),
    test("2. Get user data in a list", () => {
        const user = UserService.create(1, "aydin-due", "aydin")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("aydin-due")
        expect(userInfoList[2]).toBe("aydin")
        expect(userInfoList[3]).toBe("sin bio")
    }),
    test("3. Update username", () => {
        const user = UserService.create(1, "aydin-due", "aydin")
        UserService.updateUserUsername(user, "aydinsi")
        expect(user.username).toBe("aydinsi")
    }),
    test("4. Given a list of users return list of usernames", () => {
        const user1 = UserService.create(1, "aydin-due1", "aydin")
        const user2 = UserService.create(1, "aydin-due2", "aydin")
        const user3 = UserService.create(1, "aydin-due3", "aydin")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("aydin-due1")
        expect(usernames).toContain("aydin-due2")
        expect(usernames).toContain("aydin-due3")
    })
})