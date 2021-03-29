import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {PropsType} from "../../App";


export function Profile(props: PropsType ) {


    return (
        <div>Main content
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </div>
    )
}
