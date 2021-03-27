import {
    OnChangeHandlerType, ProfilePageProps, UpdateNewPostTextType
} from "./state";

type ProfileReducerType = (state: ProfilePageProps, action: OnChangeHandlerType | UpdateNewPostTextType) => ProfilePageProps

const ONCHANGE_HANDLER = 'ONCHANGE-HANDLER';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer: ProfileReducerType = (state, action) => {

    switch (action.type) {
        case ONCHANGE_HANDLER:
            let newPost = {
                id: 4,
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