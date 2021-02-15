import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Dialog from "../Messenger/Dialogues/Dialog/Dialog";

const NavBar = () => {
    let linksData = [
        {url: "/main", label: "Main"},
        {url: "/messenger", label: "Messenger"},
        {url: "/ferromagnet", label: "Ferromagnet"},
        {url: "/antiferromagnet", label: "Antiferromagnet"},
        {url: "/ferrimagnet", label: "Ferrimagnet"},
        {url: "/about", label: "About"},
        {url: "/language_settings", label: "Language settings"}
    ];

    let linksArray = linksData
        .map(link => (
            <div className={classes.item}>
                <NavLink to={link.url} activeClassName={classes.active}>{link.label}</NavLink>
            </div>
        ));

    return (
        <nav className={classes.nav}>
            {linksArray}
        </nav>
    );
}

export default NavBar;