import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {changeMessageActionCreator, onChangeHandlerActionCreator} from '../../redux/DialogsReducer';
import { MessagesPageProps } from '../../redux/store';


type PropsType = {
    state: MessagesPageProps,
    dispatch: (DispatchType) => void
}


export function Dialogs(props: PropsType) {
    let dialogsData = props.state.dialogsData
    let messageData = props.state.messageData


    function onChangeHandler(e) {
        let text = e.target.value
        props.dispatch(onChangeHandlerActionCreator(text))
    }

    function onClickHandler() {
        props.dispatch(changeMessageActionCreator())
    }

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
            <div>
                <div>
                    <textarea onChange={onChangeHandler} value={props.state.newDialog}/>
                </div>
                <div>
                    <button onClick={onClickHandler}>Add Post</button>
                </div>
            </div>
        </div>
    )
}

