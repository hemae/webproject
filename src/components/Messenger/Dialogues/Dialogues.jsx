import React from 'react';
import classes from './Dialogues.module.css';
import Dialog from "./Dialog/Dialog";

const Dialogues = (props) => {
    let dialoguesArray = props.dialoguesData
        .map(dialog => <Dialog status={dialog.status} companionName={dialog.companionName} id={dialog.id}/>)

    return (
        <div className={classes.dialogues}>
            {dialoguesArray}
        </div>
    );
}

export default Dialogues;