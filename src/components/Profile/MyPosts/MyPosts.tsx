import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React, {createRef} from "react";
import {NewPostTextProps, OnChangeHandlerProps, PostsDataProps, UpdateNewPostTextProps} from "../../../redux/state";

type PropsType = {
    newMessage: PostsDataProps,
    onChangeHandler: OnChangeHandlerProps,
    newPostText: NewPostTextProps,
    updateNewPostText: UpdateNewPostTextProps
}

export function MyPosts(props: PropsType) {

    let postsData = props.newMessage

    let valueArea = createRef()

    function onClickHandler() {
        props.onChangeHandler()
    }


    function onPostChange() {
        let text = valueArea.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={valueArea}
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

