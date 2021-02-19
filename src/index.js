import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/State.js';
import ReactDOM from "react-dom";
import App from "./App";
import {subscribe} from './redux/State.js';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

subscribe(rerenderEntireTree);

rerenderEntireTree(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
