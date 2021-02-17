import React from 'react';
import classes from './Messenger.module.css';
import DialoguesField from "./DialoguesField/DialoguesField";

const Messenger = (props) => {return (
        <div className={classes.messenger}>
            <DialoguesField dialoguesLinksArray={props.dialoguesLinksArray}/>
            <div className={classes.chatWrapper}>
                {props.dialoguesRouteArray}
            </div>
        </div>
    );
}

export default Messenger;