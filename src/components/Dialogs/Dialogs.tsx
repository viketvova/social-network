import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type PropsType = {
    dialogsData: {
        id: number, name: string
    }[],
    messageData: {id: number, text: string}[],
}


export function Dialogs(props: PropsType) {
    let dialogsData = props.dialogsData
    let messageData = props.messageData


    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                {
                    dialogsData.map(elem => <DialogItem key={elem.id} name={elem.name} id={elem.id}/>)
                }

            </div>
            <div className={classes.messages}>
                {
                    messageData.map(elem => {
                        return (
                            <Message message={elem.text} key={elem.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

