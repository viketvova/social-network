import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {changeMessage, onChangeHandler} from "./redux/state";

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



export let rerenderEntireTree = (state: StateProps) => {
ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App state={state} onChangeHandler={onChangeHandler} changeMessage={changeMessage}/>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
