import React from 'react';
import classes from './Dialogues.module.css';

const Dialogues = (props) => {
    return (
        <div className={classes.dialogues}>
            {props.dialoguesArray}
        </div>
    );
}

export default Dialogues;