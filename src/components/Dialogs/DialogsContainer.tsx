import {
    changeMessageActionCreator, InitialStateType,
    onChangeHandlerActionCreator
} from '../../redux/DialogsReducer';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";


type MapDispatchToPropsType = {
    dispatchChangeHandler: (text: string) => void
    dispatchClickHandler: () => void
}


let mapStateToProps = (state: AppStateType): InitialStateType => {

    return {
        dialogsData: state.dialogsPage.dialogsData,
        newDialog: state.dialogsPage.newDialog,
        messageData: state.dialogsPage.messageData
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        dispatchChangeHandler: (text: string) => {
            dispatch(onChangeHandlerActionCreator(text))
        },
        dispatchClickHandler: () => {
            dispatch(changeMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

