import React from 'react';
import classes from './Parameters.module.css';

const Parameters = (props) => {
    return (
        <div className={classes.parameters}>
            {props.parametersArray}
        </div>
    );
}

export default Parameters;