import React from 'react';
import classes from './Main.module.css';
import Calculating from "./Calculating/Calculating";
import Properties from "./Properties/Properties";
import Name from "./Name/Name";

const Main = (props) => {
    return (
        <div className={classes.main}>
            <div>
                <img src={props.mainLogo}/>
            </div>
            <Name materialsData={props.materialsData}/>
            <Properties propertiesData={props.propertiesData}/>
            What's need calctulate:
            <Calculating quantityData={props.quantityData}/>
        </div>
    );
}

export default Main;