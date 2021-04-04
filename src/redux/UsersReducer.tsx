import {v1} from "uuid";

const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET USERS'

export type LocationType = { country: string, city: string }
export type UsersDataProps = { id: string, name: string, location: LocationType, text: string, img: string, follow: boolean }[]
export type FollowACType = {
    type: 'FOLLOW',
    userId: string
}
export type setUsersType = {
    type: 'SET USERS',
    users: UsersDataProps
}

const initialState = {
    usersData: [
        {
        id: v1(),
        name: 'Dmitry K.',
        location: {country: 'Belarus', city: 'Minsk'},
        text: 'Hi, how r u?',
        img: 'https://s00.yaplakal.com/pics/userpic/7/9/2/av-692297.gif',
        follow: true
    },
        {
            id: v1(),
            name: 'Mixa T.',
            location: {country: 'Belarus', city: 'Minsk'},
            text: 'Yoyoyoy',
            img: 'https://s00.yaplakal.com/pics/userpic/7/9/2/av-692297.gif',
            follow: false
        },
        {
            id: v1(),
            name: 'Oxy Y.',
            location: {country: 'Belarus', city: 'Minsk'},
            text: 'I like to move it...',
            img: 'https://s00.yaplakal.com/pics/userpic/7/9/2/av-692297.gif',
            follow: true
        },
    ] as UsersDataProps,
}

export type InitialStateType = typeof initialState

let usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: !u.follow}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, usersData: [...state.usersData, ...action.usersData]}
        }

        default:
            return state
    }
}
export const followAC = (userId): FollowACType => ({type: FOLLOW, userId})
export const setUsersAC = (users): setUsersType => ({type: SET_USERS, users})

export default usersReducer