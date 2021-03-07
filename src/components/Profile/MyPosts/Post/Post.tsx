import classes from "./Post.module.css";

type PropsType = {
    message: string,
    likeCount: number,
    key: number,
}

export function Post(props: PropsType) {
    return (
        <div className={classes.item}>
            <img src='https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg'
                 alt={'avatar'}/>
            {props.message}
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}