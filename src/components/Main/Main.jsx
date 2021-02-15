import React from 'react';
import classes from './Main.module.css';
import Calculating from "./Calculating/Calculating";
import Properties from "./Properties/Properties";
import Name from "./Name/Name";

const Main = (props) => {
    return (
        <div className={classes.main}>
            <div>
                <img src="https://km.insma.urfu.ru/documents/logotype/cm_544x250.png" />
            </div>
            <Name />
            <Properties />
            What's need calctulate:
            <Calculating />
        </div>
    );
}

export default Main;