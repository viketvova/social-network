import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData: {id: number, name: string}[] = [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Mary'},
    {id: 3, name: 'Tony'},
    {id: 4, name: 'Ann'},
]
let messageData: {id: number, text: string}[] = [
    {id: 1, text: 'Hi'},
    {id: 2, text: 'How r u?'},
    {id: 3, text: 'Fine, and u?'},
]

let postsData: {id: number, text: string, likes: number}[] = [
    {id: 1, text: 'Hi, how r u?', likes: 15},
    {id: 2, text: 'Fine, thank', likes: 10},
    {id: 3, text: 'Fine, and u?', likes: 1},
]

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App dialogsData={dialogsData} messageData={messageData} postsData={postsData}/>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
