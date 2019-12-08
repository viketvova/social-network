import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import openAllMaps from './Lesson8/main';

let postData = [
    { id: 1, message: "Hi, how r u?", likecount: 12 },
    { id: 2, message: "It's my first post", likecount: 10 }
];
let dialogsData = [
    { id: 1, name: "Dymych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Vova" }
];
let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How r u" },
    { id: 3, message: "How is your" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" }
];

ReactDOM.render(<App postData={postData}
    dialogsData={dialogsData}
    messagesData={messagesData}
/>, document.getElementById('root'));

//ReactDOM.render(<Header />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
