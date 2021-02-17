import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/messenger/${props.dialogData.companionInfo.companionId}`}>
                <img src={props.dialogData.companionInfo.avaImgLink}/>
                {props.dialogData.companionInfo.companionName} {props.dialogData.companionInfo.status}
            </NavLink>
        </div>
    );
}

export default Dialog;