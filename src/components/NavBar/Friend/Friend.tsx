import classes from './Friend.module.css'

type FriendProps = {
    id: string,
    image: string,
    name: string
}

export function Friend(props: FriendProps) {

    return (
        <div className={classes.friend}>
            <img alt={props.id} src={props.image}/>
            <p>{props.name}</p>
        </div>
    )
}