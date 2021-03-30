import {changeMessageActionCreator, onChangeHandlerActionCreator} from '../../redux/DialogsReducer';
import React from 'react';
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";


export function DialogsContainer() {

    return (
        <StoreContext.Consumer>
            {store => {
                let state
                if (store) state = store.getState()

                function onChangeHandler(text) {
                    if (store) store.dispatch(onChangeHandlerActionCreator(text))
                }

                function onClickHandler() {
                    if (store) store.dispatch(changeMessageActionCreator())
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
            }
        </StoreContext.Consumer>

    )
}

