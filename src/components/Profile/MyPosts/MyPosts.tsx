import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React, {ChangeEvent, useState} from "react";

type OnChangeHandlerType = (event: string) => void

type PropsType = {
    newMessage: {
        text: string,
        id: number,
        likes: number,
    }[],
    onChangeHandler: OnChangeHandlerType,
}

export function MyPosts(props: PropsType) {

    let postsData = props.newMessage

    let [value, setValue] = useState('')

    function onClickHandler() {
        props.onChangeHandler(value)
        setValue('')
    }

    function onChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
        return setValue(event.target.value)
    }

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={value} onChange={onChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={onClickHandler}>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.post}>
                {
                    postsData.map(elem => {
                        return(
                            <Post key={elem.id} message={elem.text} likeCount={elem.likes} />
                        )
                    })
                }
            </div>
        </div>
    )
}

