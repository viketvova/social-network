import React from 'react';
import p from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
    return (

        <div className={p.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={p.posts}>
                    <Post message="Hi, how r u?" likecount="10"/>
                    <Post message="It's my first post" likecount="15"/>
                </div>
            </div>
            {/* <Post />
        <Post /> */}
        </div>


    );
}


export default MyPosts;