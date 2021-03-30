import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataProps, MessageDataProps, NewDialogType} from '../../redux/store';
import React from 'react';
import Button from '@material-ui/core/Button';


type DialogsPropsType = {
    newDialog: NewDialogType
    dialogsData: DialogsDataProps
    messageData: MessageDataProps
    dispatchChangeHandler: (text: string) => void
    dispatchClickHandler: () => void
}

export function Dialogs(props: DialogsPropsType) {

    function onChangeHandler(e) {
        let text = e.target.value
        props.dispatchChangeHandler(text)
    }

    function onClickHandler() {
        props.dispatchClickHandler()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                {
                    props.dialogsData.map(elem => <DialogItem key={elem.id} name={elem.name} id={elem.id}/>)
                }

            </div>
            <div className={classes.messages}>
                {
                    props.messageData.map(elem => {
                        return (
                            <Message message={elem.text} key={elem.id}/>
                        )
                    })
                }
            </div>
            <div>
                <div>
                    <textarea onChange={onChangeHandler} value={props.newDialog}/>
                </div>
                <div>
                    <Button variant="contained" color="primary" size='small' onClick={onClickHandler}>Add Post</Button>
                </div>
            </div>
        </div>
    )
}

