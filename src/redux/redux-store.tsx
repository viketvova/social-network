import {combineReducers, createStore} from 'redux';
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import profileReducer from "./ProfileReducer";
import {StoreProps} from "./store";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store: StoreProps = createStore(reducers)

export default store