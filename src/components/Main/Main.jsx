import React from 'react';
import classes from './Main.module.css';
import Calculating from "./Calculating/Calculating";
import Properties from "./Properties/Properties";
import Name from "./Name/Name";

const Main = (props) => {
    let doneCalc = () => {
        alert("You've clicked 'Run'");
    };

    return (
        <div className={classes.main}>
            <div>
                <img src={props.mainLogo}/>
            </div>
            <Name materialsArray={props.materialsArray} materialsImgArray={props.materialsImgArray} parametersArray={props.parametersArray}/>
            <Properties propertiesArray={props.propertiesArray}/>
            What's need calctulate:
            <Calculating quantityArray={props.quantityArray}/>
            <button onClick={doneCalc}>Run</button>
        </div>
    );
}

export default Main;