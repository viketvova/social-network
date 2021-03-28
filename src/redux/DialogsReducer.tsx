import { v1 } from "uuid";
import {
    ChangeMessageType,
    MessagesPageProps,
    OnChangeHandlerMessageType
} from "./store";

type DialogsReducerType = (state: MessagesPageProps, action:OnChangeHandlerMessageType | ChangeMessageType) => MessagesPageProps

const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const MESSAGE_HANDLER = 'MESSAGE-HANDLER';

let initialState:MessagesPageProps= {
    messageData: [
        {id: v1(), text: 'Hi'},
        {id: v1(), text: 'How r u?'},
        {id: v1(), text: 'Fine, and u?'},
    ],
    dialogsData: [
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Mary'},
        {id: v1(), name: 'Tony'},
        {id: v1(), name: 'Ann'},
    ],
    newDialog: ''
}

const dialogsReducer: DialogsReducerType = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_MESSAGE:
            let newMessage = {
                id: v1(),
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