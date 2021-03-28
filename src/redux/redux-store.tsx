import { combineReducers, createStore } from 'redux';
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import profileReducer from "./ProfileReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store:any = createStore(reducers)

export default store