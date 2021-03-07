import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PropsType = {
    postsData: {
        text: string,
        id: number,
        likes: number,
    }[]
}

export function Profile(props: PropsType) {
    let postsData = props.postsData

    return (
        <div>Main content
            <ProfileInfo/>
            <MyPosts newMessage={postsData}/>
        </div>
    )
}
