import React from "react";
import {onClickHandlerActionCreator, onPostChangeActionCreator} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {PropsType} from "../../../App";


export function MyPostsContainer(props: PropsType) {
    let state = props.store.getState()

    function onClickHandler() {
        props.store.dispatch(onClickHandlerActionCreator())
    }


    function onPostChange(text: string) {
        props.store.dispatch(onPostChangeActionCreator(text))
    }

    return (
        <MyPosts
            newPostText={state.profilePage.newPostText}
            postsData={state.profilePage.postsData}
            updateNewPostText={onPostChange}
            onChangeHandler={onClickHandler}
        />
    )
}

