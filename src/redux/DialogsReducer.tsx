import {v1} from "uuid";

const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const MESSAGE_HANDLER = 'MESSAGE-HANDLER';


export type MessageDataProps = { id: string, text: string }[]
export type DialogsDataProps = { id: string, name: string }[]
export type NewDialogType = string
export type ChangeMessageType = {
    type: 'CHANGE-MESSAGE',
}
export type OnChangeHandlerMessageType = {
    type: 'MESSAGE-HANDLER',
    newDialog: string
}

const initialState = {
    messageData: [
        {id: v1(), text: 'Hi'},
        {id: v1(), text: 'How r u?'},
        {id: v1(), text: 'Fine, and u?'},
    ] as MessageDataProps,
    dialogsData: [
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Mary'},
        {id: v1(), name: 'Tony'},
        {id: v1(), name: 'Ann'},
    ] as DialogsDataProps,
    newDialog: '' as NewDialogType
}
export type InitialStateType = typeof initialState

let dialogsReducer = (state: InitialStateType = initialState, action): InitialStateType => {

    switch (action.type) {
        case CHANGE_MESSAGE:
            let newMessage = {
                id: v1(),
                text: state.newDialog,
            }
            return {
                ...state,
                newDialog: '',
                messageData: [...state.messageData, newMessage]
            }
        case MESSAGE_HANDLER:
            return {
                ...state,
                newDialog: action.newDialog
            }
        default:
            return (state)
    }
}

export const changeMessageActionCreator = (): ChangeMessageType => ({type: CHANGE_MESSAGE})
export const onChangeHandlerActionCreator = (text: string): OnChangeHandlerMessageType => ({
    type: MESSAGE_HANDLER,
    newDialog: text
})

export default dialogsReducer