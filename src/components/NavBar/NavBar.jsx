import React from 'react';
import classes from './NavBar.module.css';

const NavBar = (props) => {
    return (
        <nav className={classes.nav}>
            {props.linksArray}
        </nav>
    );
}

export default NavBar;