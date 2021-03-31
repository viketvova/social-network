import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


export function Profile() {

    return (
        <div>Main content
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
