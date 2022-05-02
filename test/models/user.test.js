const User = require('./../../app/models/user')

describe("Unit Tests for User class", () => {
    test('Create an User object', () => {
        const user = new User(1, "aydin-due", "aydin", "bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("aydin-due")
        expect(user.name).toBe("aydin")
        expect(user.bio).toBe("bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    }),
    test('Add getters', () => {
        const user = new User(1, "aydin-due", "aydin", "bio")
        expect(user.getUsername).toBe("aydin-due")
        expect(user.getBio).toBe("bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})