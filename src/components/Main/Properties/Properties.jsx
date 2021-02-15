import React from 'react';
import classes from './Properties.module.css';
import Property from "./Property/Property";

const Properties = (props) => {
    let propertiesArray = props.propertiesData
        .map(property => <Property quantity={property.quantity} unit={property.unit}/>);

    return (
        <div>
            {propertiesArray}
        </div>
    );
}

export default Properties;