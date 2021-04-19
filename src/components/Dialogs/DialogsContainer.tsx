import {
    dispatchChangeHandler,
    dispatchClickHandler,
    InitialStateType
} from '../../redux/DialogsReducer';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        newDialog: state.dialogsPage.newDialog,
        messageData: state.dialogsPage.messageData
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    dispatchChangeHandler,
    dispatchClickHandler,
})(Dialogs)