import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type PostsDataProps = {id: number, text: string, likes: number}[]
type ProfilePageProps = {postsData: PostsDataProps}
type OnChangeHandlerType = (event: string) => void
type StateProps = {
    state: ProfilePageProps,
    onChangeHandler: OnChangeHandlerType,
}


export function Profile(props: StateProps) {
    let postsData = props.state.postsData

    return (
        <div>Main content
            <ProfileInfo/>
            <MyPosts newMessage={postsData} onChangeHandler={props.onChangeHandler}/>
        </div>
    )
}
