import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";



type DialogsDataProps = {id: number, name: string}[]
type MessageDataProps = {id: number, text: string}[]
type PostsDataProps = {id: number, text: string, likes: number}[]
type SidebarProps = {id: number, name: string, image: string}[]
type ProfilePageProps = {postsData: PostsDataProps}
type MessagesPageProps = {messageData: MessageDataProps, dialogsData: DialogsDataProps}
type StateProps = {
    profilePage: ProfilePageProps,
    dialogsPage: MessagesPageProps,
    sidebar: SidebarProps,
}
type OnChangeHandlerType = (event: string) => void

type RootStateProps = {
    state: StateProps,
    onChangeHandler: OnChangeHandlerType,
    changeMessage: OnChangeHandlerType,
}

function App(props: RootStateProps) {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar state={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/profile' exact render={() => <Profile state={props.state.profilePage} onChangeHandler={props.onChangeHandler}/>}/>
                    <Route path='/dialogs' exact render={() => <Dialogs state={props.state.dialogsPage} changeMessage={props.changeMessage}/>}/>
                    <Route path='/news' exact component={News}/>
                    <Route path='/music' exact component={Music}/>
                    <Route path='/settings' exact component={Settings}/>
                    <Route path='/'/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

