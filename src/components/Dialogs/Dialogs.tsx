import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsDataProps = {id: number, name: string}[]
type MessageDataProps = {id: number, text: string}[]
type MessagesPageProps = {messageData: MessageDataProps, dialogsData: DialogsDataProps}
type PropsType = {
    state: MessagesPageProps,
}


export function Dialogs(props: PropsType) {
    let dialogsData = props.state.dialogsData
    let messageData = props.state.messageData


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

