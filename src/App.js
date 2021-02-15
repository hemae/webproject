import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Main from "./components/Main/Main.jsx";
import Messenger from "./components/Messenger/Messenger.jsx";
import Ferromagnet from "./components/Ferromagnet/Ferromagnet.jsx";
import Antiferromagnet from "./components/Antiferromagnet/Antiferromagnet.jsx";
import Ferrimagnet from "./components/Ferrimagnet/Ferrimagnet.jsx";
import About from "./components/About/About.jsx";
import Language from "./components/Language/Language.jsx";

const App = () => {
    let routeData = [
        {path: "/main", component: Main},
        {path: "/messenger", component: Messenger},
        {path: "/ferromagnet", component: Ferromagnet},
        {path: "/antiferromagnet", component: Antiferromagnet},
        {path: "/ferrimagnet", component: Ferrimagnet},
        {path: "/about", component: About},
        {path: "/language_settings", component: Language}
    ];

    let routeArray = routeData
        .map(route => <Route path={route.path} component={route.component}/>);

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    {routeArray}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
