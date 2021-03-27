import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {
    NewPostTextProps,
    PostsDataProps
} from "../../../redux/state";
import { onClickHandlerActionCreator, onPostChangeActionCreator } from "../../../redux/ProfileReducer";


type PropsType = {
    newMessage: PostsDataProps,
    dispatch: (DispatchType) => void
    newPostText: NewPostTextProps,
}


export function MyPosts(props: PropsType) {

    let postsData = props.newMessage


    function onClickHandler() {
        props.dispatch(onClickHandlerActionCreator())
    }


    function onPostChange(e) {
        let text = e.target.value
        props.dispatch(onPostChangeActionCreator(text))
    }

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={onClickHandler}>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.post}>
                {
                    postsData.map(elem => {
                        return (
                            <Post key={elem.id} message={elem.text} likeCount={elem.likes}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

