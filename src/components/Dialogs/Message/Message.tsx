import classes from "../Dialogs.module.css";

type MessagePropsType = {
    key: string,
    message: string,
}

export function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}