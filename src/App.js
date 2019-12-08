import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData}
                        messagesData={props.messagesData} />} />
                    <Route path='/profile' render={() => <Profile postData={props.postData} />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;