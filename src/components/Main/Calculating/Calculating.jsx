import React from 'react';
import classes from './Calculating.module.css';
import Quantity from "./Quantity/Quantity";

const Calculating = (props) => {
    let quantityArray = props.quantityData
        .map(quantity => <Quantity quantity={quantity.quantity} imglink={quantity.imglink}/>);

    return (
        <div className={classes.calculating}>
            {quantityArray}
        </div>
    );
}

export default Calculating;