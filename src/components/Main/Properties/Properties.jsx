import React from 'react';
import classes from './Properties.module.css';
import Property from "./Property/Property";

const Properties = () => {
    let propertiesData = [
        {quantity: "Mass", unit: "g"},
        {quantity: "Volume", unit: "cm3"},
        {quantity: "Density", unit: "g/cm3"}
    ];

    let propertiesArray = propertiesData
        .map(property => <Property quantity={property.quantity} unit={property.unit}/>);

    return (
        <div>
            {propertiesArray}
        </div>
    );
}

export default Properties;