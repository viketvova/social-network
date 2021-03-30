import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {StateProps} from "./redux/store";
import store from "./redux/redux-store";
import { Provider } from "./StoreContext";


let rerenderEntireTree = (state: StateProps) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})