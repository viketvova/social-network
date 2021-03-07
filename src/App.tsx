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


type PropsApp = {
    dialogsData: {
        id: number, name: string
    }[],
    messageData: {id: number, text: string}[],
    postsData: {id: number, text: string, likes: number}[],
}

function App(props: PropsApp) {
    console.log(props)
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/profile' exact render={() => <Profile postsData={props.postsData}/>}/>
                    <Route path='/dialogs' exact render = {() => <Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>}/>
                    <Route path='/news' exact component={News}/>
                    <Route path='/music' exact component={Music}/>
                    <Route path='/settings' exact component={Settings}/>
                    <Route path='/' />
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

