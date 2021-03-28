import { v1 } from "uuid";
import {
    OnChangeHandlerType, ProfilePageProps, UpdateNewPostTextType
} from "./store";

type ProfileReducerType = (state: ProfilePageProps, action: OnChangeHandlerType | UpdateNewPostTextType) => ProfilePageProps

const ONCHANGE_HANDLER = 'ONCHANGE-HANDLER';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState:ProfilePageProps = {
    postsData: [
        {id: v1(), text: 'Hi, how r u?', likes: 15},
        {id: v1(), text: 'Fine, thank', likes: 10},
        {id: v1(), text: 'Fine, and u?', likes: 1},
    ],
    newPostText: 'it-kam'
}

const profileReducer: ProfileReducerType = (state = initialState, action) => {

    switch (action.type) {
        case ONCHANGE_HANDLER:
            let newPost = {
                id: v1(),
                text: state.newPostText,
                likes: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
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