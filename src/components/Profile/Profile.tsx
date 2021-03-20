import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {OnChangeHandlerProps, ProfilePageProps, UpdateNewPostTextProps} from "../../redux/state";


type PropsType = {
    state: ProfilePageProps
    onChangeHandler: OnChangeHandlerProps,
    updateNewPostText: UpdateNewPostTextProps
}

export function Profile(props: PropsType) {
    let postsData = props.state.postsData

    return (
        <div>Main content
            <ProfileInfo/>
            <MyPosts newMessage={postsData}
                     onChangeHandler={props.onChangeHandler}
                     newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}
