import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";

type PropsType = {
    newMessage: {
        text: string,
        id: number,
        likes: number,
    }[]
}


export function MyPosts(props: PropsType) {

    let postsData = props.newMessage

    return (
        <div className={classes.myPosts}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add Post</button>
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

