import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import NavBarContainer from "./components/NavBar/NavBarContainer";


const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBarContainer/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/profile' exact render={() =>
                        <Profile/>}/>
                    <Route path='/dialogs' exact render={() =>
                        <DialogsContainer/>}/>
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

