import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from "./components/Main/Main.jsx";
import Messenger from "./components/Messenger/Messenger.jsx";
import Ferromagnet from "./components/Ferromagnet/Ferromagnet.jsx";
import Antiferromagnet from "./components/Antiferromagnet/Antiferromagnet.jsx";
import Ferrimagnet from "./components/Ferrimagnet/Ferrimagnet.jsx";
import About from "./components/About/About.jsx";
import Language from "./components/Language/Language.jsx";

let linksData = [
    {url: "/main", label: "Main"},
    {url: "/messenger", label: "Messenger"},
    {url: "/ferromagnet", label: "Ferromagnet"},
    {url: "/antiferromagnet", label: "Antiferromagnet"},
    {url: "/ferrimagnet", label: "Ferrimagnet"},
    {url: "/about", label: "About"},
    {url: "/language_settings", label: "Language settings"}
];

let routeData = [
    {path: "/main", component: Main},
    {path: "/messenger", component: Messenger},
    {path: "/ferromagnet", component: Ferromagnet},
    {path: "/antiferromagnet", component: Antiferromagnet},
    {path: "/ferrimagnet", component: Ferrimagnet},
    {path: "/about", component: About},
    {path: "/language_settings", component: Language}
];

ReactDOM.render(
    <React.StrictMode>
        <App linksData={linksData} routeData={routeData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
