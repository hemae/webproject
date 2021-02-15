import React from 'react';
import classes from './Properties.module.css';
import Property from "./Property/Property";

const Properties = () => {
    let propertiesData = [
        {quantity: "Mass", unit: "g"},
        {quantity: "Volume", unit: "cm3"},
        {quantity: "Density", unit: "g/cm3"}
    ];

    return (
        <div>
            <Property quantity={propertiesData[0].quantity} unit={propertiesData[0].unit} />
            <Property quantity={propertiesData[1].quantity} unit={propertiesData[1].unit} />
            <Property quantity={propertiesData[2].quantity} unit={propertiesData[2].unit} />
        </div>
    );
}

export default Properties;