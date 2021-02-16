import React from 'react';
import classes from './Calculating.module.css';

const Calculating = (props) => {
    return (
        <div className={classes.calculating}>
            {props.quantityArray}
        </div>
    );
}

export default Calculating;