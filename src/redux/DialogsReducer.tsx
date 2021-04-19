import {v1} from "uuid";

export type InitialStateType = typeof initialState

const initialState = {
    messageData: [
        {id: v1(), text: 'Hi, how are you'},
        {id: v1(), text: 'Hi, how are you'},
        {id: v1(), text: 'Hi, how are you'},
    ],
    dialogsData: [
        {id: v1(), name: 'Viktor'},
        {id: v1(), name: 'Vova'},
        {id: v1(), name: 'Koljan4ick'}
    ],
    newDialog: ''
}


let dialogsReducer = (state: InitialStateType = initialState, action): InitialStateType => {
    switch (action.type) {
        case 'CHANGE_HANDLER':
            return {
                ...state, newDialog: action.text
            }
        case 'CLICK_HANDLER':
            let newMessage = {
                id: v1(), text: state.newDialog
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                newDialog: ''
            }
        default:
            return state
    }
}

export const dispatchChangeHandler = (text: string) => ({type: 'CHANGE_HANDLER', text})
export const dispatchClickHandler = () => ({type: 'CLICK_HANDLER'})

export default dialogsReducer