import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {StateProps} from "./redux/store";
import store from "./redux/redux-store";


let rerenderEntireTree = (state: StateProps) => {

    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App store={store}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})