import React from 'react';
import classes from './Property.module.css';

const Property = (props) => {
    return (
        <div className={classes.property}>
            {props.quantity}:
            <input />
            <button>get value</button>
            <span>{props.unit}</span>
        </div>
    );
}

export default Property;