import {v1} from "uuid"

export type InitialStateType = typeof initialState
export type ProfileType = typeof initialState.profile
export type PostsDataProps = {
    id: string, text: string, likes: number
}[]

export type SetUserProfileType = {
    type: 'SET_USER_PROFILE',
    profile: null | ProfileType
}

const CHANGE_HANDLER = 'CHANGE_HANDLER'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'


let initialState = {
    postsData: [
        {id: v1(), text: 'Hi, how do u do?', likes: 0},
        {id: v1(), text: 'Hi, 2', likes: 3},
        {id: v1(), text: 'Hi, 23', likes: 4},
        {id: v1(), text: 'Hi, how do u do?', likes: 3},
    ] as PostsDataProps,
    newPostText: 'it-kama',
    profile: null
}

let profileReducer = (state: InitialStateType = initialState, action): InitialStateType => {
    switch (action.type) {
        case CHANGE_HANDLER:
            let newPost = {
                id: v1(), text: state.newPostText, likes: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, newPostText: action.text
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state
    }
}

export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, text})
export const onChangeHandlerAC = () => ({type: CHANGE_HANDLER})
export const setUserProfile = (profile): SetUserProfileType => ({type: SET_USER_PROFILE, profile})

export default profileReducer