import React from "react";
import {onClickHandlerActionCreator, onPostChangeActionCreator} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";


export function MyPostsContainer() {

    return (
        <StoreContext.Consumer>
            {store => {
                let state
                if (store) state = store.getState()

                function onClickHandler() {
                    if (store) store.dispatch(onClickHandlerActionCreator())
                }

                function onPostChange(text: string) {
                    if (store) store.dispatch(onPostChangeActionCreator(text))
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
            }
        </StoreContext.Consumer>

    )
}

