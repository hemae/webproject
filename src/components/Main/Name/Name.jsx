import React from 'react';
import classes from './Name.module.css';
import Parameters from "./Parameters/Parameters";

const Name = (props) => {
    return (
        <div className={classes.name}>
            <Parameters parametersArray={props.parametersArray}/>
            <select>
                {props.materialsArray}
            </select>
            <select>
                {props.materialsImgArray}
            </select>
        </div>
    );
}

export default Name;