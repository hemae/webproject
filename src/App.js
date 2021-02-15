import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = (props) => {
    let routeArray = props.routeData
        .map(route => <Route path={route.path} component={route.component}/>);

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar linksData={props.linksData}/>
                <div className="app-wrapper-content">
                    {routeArray}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
