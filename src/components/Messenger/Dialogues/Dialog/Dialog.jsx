import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/messenger/" + props.id}>
                {props.status}, {props.companionName}
            </NavLink>
        </div>
    );
}

export default Dialog;