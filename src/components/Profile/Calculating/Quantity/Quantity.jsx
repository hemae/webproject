import React from 'react';
import classes from './Quantity.module.css';

const Quantity = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.imglink} />
            {props.quantity}
        </div>
    );
}

export default Quantity;