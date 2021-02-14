import React from 'react';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href="#s">Ferromagnet</a>
            </div>
            <div className={classes.item}>
                <a href="#s">Antiferromagnet</a>
            </div>
            <div className={classes.item}>
                <a href="#s">Ferrimagnet</a>
            </div>
            <div className={classes.item}>
                <a href="#s">About</a>
            </div>
            <div className={classes.item}>
                <a href="#s">Language settings</a>
            </div>
        </nav>
    );
}

export default NavBar;