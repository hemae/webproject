import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Profile from "./components/Profile.jsx";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar />
            <Profile />
        </div>
    );
}

export default App;
