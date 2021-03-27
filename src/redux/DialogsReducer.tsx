import {
    ChangeMessageType,
    MessagesPageProps,
    OnChangeHandlerMessageType
} from "./state";

type DialogsReducerType = (state: MessagesPageProps, action:OnChangeHandlerMessageType | ChangeMessageType) => MessagesPageProps

const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const MESSAGE_HANDLER = 'MESSAGE-HANDLER';

const dialogsReducer: DialogsReducerType = (state, action) => {

    switch (action.type) {
        case CHANGE_MESSAGE:
            let newMessage = {
                id: 12,
                text: state.newDialog,
            }
            state.messageData.push(newMessage)
            state.newDialog = ''
            return (state)
        case MESSAGE_HANDLER:
            state.newDialog = action.newDialog
            return (state)
        default:
            return (state)
    }
}

export const changeMessageActionCreator = (): ChangeMessageType => ({type: CHANGE_MESSAGE})
export const onChangeHandlerActionCreator = (text: string):OnChangeHandlerMessageType => ({
    type: MESSAGE_HANDLER,
    newDialog: text
})

export default dialogsReducer