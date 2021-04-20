import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {RouterPropsType} from "./ProfileContainer";




export function Profile(props: RouterPropsType) {

    return (
        <div>Main content
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
