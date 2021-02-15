import React from 'react';
import classes from './Property.module.css';

const Property = (props) => {
    return (
        <div>
            {props.quantity}:
            <input value="0.00"/>
            <span className={classes.units}>{props.unit}</span>
        </div>
    );
}

export default Property;