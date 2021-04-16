const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

export type PhotosType = { small: string, big: string }
export type UsersDataProps = { id: string, name: string, uniqueUrlName: string | null, text: string, photos: PhotosType, status: boolean }[]
export type FollowACType = {
    type: 'FOLLOW',
    userId: string
}
export type setUsersType = {
    type: 'SET USERS',
    users: UsersDataProps
}
export type setCurrentPage = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}
export type setTotalUsersCountPage = {
    type: 'SET_TOTAL_USERS_COUNT',
    count: number
}

const initialState = {
    usersData: [] as UsersDataProps,
    pageSize: 5 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,

}

export type InitialStateType = typeof initialState

let usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, status: !u.status}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, usersData: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state
    }
}
export const followAC = (userId): FollowACType => ({type: FOLLOW, userId})
export const setUsersAC = (users): setUsersType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage): setCurrentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (count): setTotalUsersCountPage => ({type: SET_TOTAL_USERS_COUNT, count})


export default usersReducer