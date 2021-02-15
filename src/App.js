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

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <NavBar />
                <div className="app-wrapper-content">
                    <Route path={routeData[0].path} component={routeData[0].component}/>
                    <Route path={routeData[1].path} component={routeData[1].component}/>
                    <Route path={routeData[2].path} component={routeData[2].component}/>
                    <Route path={routeData[3].path} component={routeData[3].component}/>
                    <Route path={routeData[4].path} component={routeData[4].component}/>
                    <Route path={routeData[5].path} component={routeData[5].component}/>
                    <Route path={routeData[6].path} component={routeData[6].component}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
