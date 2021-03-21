import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchType, ProfilePageProps} from "../../redux/state";


type PropsType = {
    state: ProfilePageProps
    dispatch: DispatchType
    // onChangeHandler: OnChangeHandlerProps,
    // updateNewPostText: UpdateNewPostTextProps
}

export function Profile(props: PropsType) {
    let postsData = props.state.postsData

    return (
        <div>Main content
            <ProfileInfo/>
            <MyPosts newMessage={postsData}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}
