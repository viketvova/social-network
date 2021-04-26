import {combineReducers, createStore} from 'redux';
import dialogsReducer from './DialogsReducer';
import profileReducer from './ProfileReducer';
import sidebarReducer from './SidebarReducer';
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store

export default store