import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    let linksArray = props.linksData
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