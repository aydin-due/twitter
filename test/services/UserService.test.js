const UserService = require('./../../app/services/UserService')

describe('Test for UserService', () => {
    test("1. Create new user using UserService", () => {
        const user = UserService.create(1, "aydin-due", "aydin")
        expect(user.id).toBe(1)
        expect(user.username).toBe("aydin-due")
        expect(user.name).toBe("aydin")
        expect(user.bio).not.toBeUndefined()
    })
})