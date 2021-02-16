import React from 'react';
import classes from './Messenger.module.css';
import Dialogues from "./Dialogues/Dialogues";

const Messenger = (props) => {
    return (
        <div className={classes.messenger}>
            <Dialogues dialoguesArray={props.dialoguesArray}/>
            <div className={classes.chatWrapper}>
                {props.chatArray}
            </div>
        </div>
    );
}

export default Messenger;