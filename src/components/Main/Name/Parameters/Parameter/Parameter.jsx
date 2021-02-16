import React from 'react';
import classes from './Parameter.module.css';

const Parameter = (props) => {
    return (
        <div className={classes.parameter}>
            Input {props.sampleParameter}:
            <div className={classes.nameInput}>
                <input value={props.sampleParameter}/>
            </div>
        </div>
    );
}

export default Parameter;