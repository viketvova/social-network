import usersReducer, {followHandler, setCurrentPage, setIsFetching, setTotalUsersCount} from "./UsersReducer";


const startState = require('./UsersReducer')

describe('AC', () => {
    test('You should set Current Page', () => {
        const currentPage = 2
        const endState = usersReducer(startState, setCurrentPage(currentPage))
        expect(endState.currentPage).toBe(2)
    })

    test('You should have total users count', () => {
        const count = 1000
        const endState = usersReducer(startState, setTotalUsersCount(count))

        expect(endState.totalUsersCount).toBeGreaterThanOrEqual(count)
    })

    test('You should change boolean isFetching', () => {
        const booleanFetching = true

        const endState = usersReducer(startState, setIsFetching(booleanFetching))

        expect(endState.isFetching).toBeTruthy()
    })

})
