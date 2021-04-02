import {v1} from "uuid";

const ONCHANGE_HANDLER = 'ONCHANGE-HANDLER';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type NewPostTextProps = string
export type PostsDataProps = { id: string, text: string, likes: number }[]
export type OnChangeHandlerType = {
    type: 'ONCHANGE-HANDLER',
}
export type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
const initialState = {
    postsData: [
        {id: v1(), text: 'Hi, how r u?', likes: 15},
        {id: v1(), text: 'Fine, thank', likes: 10},
        {id: v1(), text: 'Fine, and u?', likes: 1},
    ] as PostsDataProps,
    newPostText: 'it-kam' as NewPostTextProps
}
export type InitialStateType = typeof initialState

let profileReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case ONCHANGE_HANDLER: {
            let newPost = {
                id: v1(),
                text: state.newPostText,
                likes: 0
            }
            let stateCopy = JSON.parse(JSON.stringify(state))
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const onClickHandlerActionCreator = (): OnChangeHandlerType => ({type: ONCHANGE_HANDLER})
export const onPostChangeActionCreator = (text: string): UpdateNewPostTextType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export default profileReducer