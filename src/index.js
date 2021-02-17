import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/State.js';
import {funcsData} from "./redux/State.js";
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state, funcsData);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
