const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const UNFOLLOW = 'UNFOLLOW'

export type PhotosType = { small: string, big: string }
export type UsersDataProps = { id: string, name: string, uniqueUrlName: string | null, text: string, photos: PhotosType, followed: boolean }[]
export type FollowACType = {
    type: 'FOLLOW',
    userId: string
}
export type UnFollowACType = {
    type: 'UNFOLLOW',
    userId: string
}
export type setUsersType = {
    type: 'SET USERS',
    users: UsersDataProps
}
export type setCurrentPageType = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}
export type setTotalUsersCountPage = {
    type: 'SET_TOTAL_USERS_COUNT',
    count: number
}
export type setIsFetchingPage = {
    type: 'TOGGLE_IS_FETCHING',
    isFetching: boolean
}
export type ActionType = FollowACType | setUsersType | setCurrentPageType | setTotalUsersCountPage | setIsFetchingPage | UnFollowACType
export type InitialStateType = typeof initialState

const initialState = {
    usersData: [] as UsersDataProps,
    pageSize: 5 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false
}

let usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const followHandler = (userId): FollowACType => ({type: FOLLOW, userId})
export const unFollowHandler = (userId): UnFollowACType => ({type: UNFOLLOW, userId})
export const setUsersHandler = (users): setUsersType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage): setCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (count): setTotalUsersCountPage => ({type: SET_TOTAL_USERS_COUNT, count})
export const setIsFetching = (isFetching): setIsFetchingPage => ({type: TOGGLE_IS_FETCHING, isFetching})


export default usersReducer