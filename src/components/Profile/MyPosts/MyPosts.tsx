import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React, {createRef} from "react";
import {DispatchType, NewPostTextProps, PostsDataProps} from "../../../redux/state";

type PropsType = {
    newMessage: PostsDataProps,
    dispatch: DispatchType
    newPostText: NewPostTextProps,
    // updateNewPostText: UpdateNewPostTextProps
    // onChangeHandler: OnChangeHandlerProps,
}

export function MyPosts(props: PropsType) {

    let postsData = props.newMessage

    let valueArea = createRef()

    function onClickHandler() {
        props.dispatch({type: 'ONCHANGE-HANDLER'})
        // props.onChangeHandler()
    }


    function onPostChange() {
        let text = valueArea.current.value
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
        // props.updateNewPostText(text)
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

