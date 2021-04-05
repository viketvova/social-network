const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET USERS'

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

const initialState = {
    usersData: [ ] as UsersDataProps,
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
            return {...state, usersData: [...state.usersData, ...action.users]}
        }

        default:
            return state
    }
}
export const followAC = (userId): FollowACType => ({type: FOLLOW, userId})
export const setUsersAC = (users): setUsersType => ({type: SET_USERS, users})

export default usersReducer