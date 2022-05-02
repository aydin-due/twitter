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
    })
})