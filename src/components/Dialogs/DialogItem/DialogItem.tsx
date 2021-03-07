import {NavLink} from "react-router-dom";
import classes from "../Dialogs.module.css";

type DialogItemPropsType = {
    id: number,
    name: string,
    key: number,
}

export function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}