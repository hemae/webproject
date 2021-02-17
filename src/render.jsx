import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


export let rerenderEntireTree = (state, funcsData) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} funcsData={funcsData}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
