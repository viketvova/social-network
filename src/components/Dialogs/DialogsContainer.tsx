import {changeMessageActionCreator, onChangeHandlerActionCreator} from '../../redux/DialogsReducer';
import React from 'react';
import {Dialogs} from "./Dialogs";
import {PropsType} from "../../App";


export function DialogsContainer(props: PropsType) {
    let state = props.store.getState()

    function onChangeHandler(text) {
        props.store.dispatch(onChangeHandlerActionCreator(text))
    }

    function onClickHandler() {
        props.store.dispatch(changeMessageActionCreator())
    }

    return (
        <Dialogs
            newDialog={state.dialogsPage.newDialog}
            dialogsData={state.dialogsPage.dialogsData}
            messageData={state.dialogsPage.messageData}
            dispatchChangeHandler={onChangeHandler}
            dispatchClickHandler={onClickHandler}
        />
    )
}

