import {InitialStateType, onChangeHandlerAC, updateNewPostTextAC} from "../../../redux/ProfileReducer"
import {AppStateType} from "../../../redux/redux-store"
import {MyPosts} from "./MyPosts"
import {connect} from "react-redux";

let mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeHandler: () => {
            dispatch(onChangeHandlerAC())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)