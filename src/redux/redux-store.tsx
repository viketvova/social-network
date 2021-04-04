import {combineReducers, createStore} from 'redux';
import dialogsReducer from './DialogsReducer';
import profileReducer from './ProfileReducer';
import sidebarReducer from './SidebarReducer';
import usersReducer from "./UsersReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store

export default store