import {InitialStateType, onClickHandlerActionCreator, onPostChangeActionCreator} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";


type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void,
    onChangeHandler: () => void
}

let mapStateToProps = (state: AppStateType): InitialStateType => {
    return (
        {
            newPostText: state.profilePage.newPostText,
            postsData: state.profilePage.postsData
        }
    )
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return (
        {
            updateNewPostText: (text: string) => {
                dispatch(onPostChangeActionCreator(text))
            },
            onChangeHandler: () => {
                dispatch(onClickHandlerActionCreator())
            }
        }
    )
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
