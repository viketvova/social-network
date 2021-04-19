import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";




export function Profile(props: any) {

    return (
        <div>Main content
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
