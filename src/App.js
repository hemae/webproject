import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar linksArray={props.state.linksArray}/>
                <div className="app-wrapper-content">
                    {props.state.routeArray}
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
