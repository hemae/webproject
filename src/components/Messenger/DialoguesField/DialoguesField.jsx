import React from 'react';
import classes from './DialoguesField.module.css';

const DialoguesField = (props) => {
    return (
        <div className={classes.dialoguesField}>
            {props.dialoguesLinksArray}
        </div>
    );
}

export default DialoguesField;