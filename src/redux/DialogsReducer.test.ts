import dialogsReducer, {dispatchChangeHandler, dispatchClickHandler} from "./DialogsReducer";
import {v1} from "uuid";

const startState = require('./DialogsReducer')

test('You should change new dialog', () => {
    const newText = 'newText'

    const endState = dialogsReducer(startState, dispatchChangeHandler(newText))

    expect(endState.newDialog).toBe(newText)
})

test('You should dispatch new message with click', () => {
    const startState = {
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
        newDialog: 'Get over here!!!'
    }

    const endState = dialogsReducer(startState, dispatchClickHandler())

    expect(endState.messageData.length).toBeGreaterThanOrEqual(4)
    expect(endState.messageData[3].text).toBe('Get over here!!!')

})