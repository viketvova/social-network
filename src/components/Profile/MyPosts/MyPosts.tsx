import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import Button from '@material-ui/core/Button';
import { PostsDataProps } from "../../../redux/ProfileReducer";



type PropsType = {
    newPostText: string
    postsData: PostsDataProps
    updateNewPostText: (text: string) => void
    onChangeHandler: () => void
}

export function MyPosts(props: PropsType) {

    function onClickHandler() {
        props.onChangeHandler()
    }

    function onPostChange(e) {
        let text = e.target.value
        props.updateNewPostText(text)
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
                    <Button variant="contained" color="primary" size={'small'} onClick={onClickHandler}>Add
                        Post</Button>
                    <Button variant="contained" color="secondary" size={'small'}>Remove</Button>
                </div>
            </div>
            <div className={classes.post}>
                {
                    props.postsData.map(elem => {
                        return (
                            <Post key={elem.id} message={elem.text} likeCount={elem.likes}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

