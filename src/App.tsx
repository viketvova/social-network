import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import {Footer} from "./components/Footer/Footer";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import NavBarContainer from './components/NavBar/NavBarContainer';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';



const App = () => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBarContainer/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer />}/>
                    <Route path='/dialogs' exact render={() =>
                        <DialogsContainer/>}/>
                    <Route path='/users' exact render={() =>
                       <UsersContainer/>} />
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

