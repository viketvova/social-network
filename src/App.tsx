import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreProps} from "./redux/store";
import {DialogsContainer} from './components/Dialogs/DialogsContainer';


export type PropsType = {
    store: StoreProps,
}

const App = (props: PropsType) => {

    let state = props.store.getState()

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar state={state.sidebar}/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/profile' exact render={() =>
                        <Profile
                            store={props.store}
                        />}/>
                    <Route path='/dialogs' exact render={() =>
                        <DialogsContainer
                            store={props.store}
                        />}/>
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

