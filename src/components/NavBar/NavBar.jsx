import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/main" activeClassName={classes.active}>Main</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/messenger" activeClassName={classes.active}>Messenger</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/ferromagnet" activeClassName={classes.active}>Ferromagnet</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/antiferromagnet" activeClassName={classes.active}>Antiferromagnet</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/ferrimagnet" activeClassName={classes.active}>Ferrimagnet</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/about" activeClassName={classes.active}>About</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/language_settings" activeClassName={classes.active}>Language settings</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;