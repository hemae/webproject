import React from 'react';
import classes from './Properties.module.css';
import Property from "./Property/Property";

const Properties = () => {
    return (
        <div>
            <Property quantity="Mass" unit="g" />
            <Property quantity="Volume" unit="cm3" />
            <Property quantity="Density" unit="g/cm3" />
        </div>
    );
}

export default Properties;