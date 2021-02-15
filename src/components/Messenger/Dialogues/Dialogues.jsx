import React from 'react';
import classes from './Dialogues.module.css';
import Dialog from "./Dialog/Dialog";
import {NavLink} from "react-router-dom";

const Dialogues = (props) => {
    let dialoguesData = [
        {id: "1", companionName: "Svalov", status: "offline"},
        {id: "2", companionName: "Vas'kovskiy", status: "online"},
        {id: "3", companionName: "Volegov", status: "offline"},
        {id: "4", companionName: "Dmitriy Sergeevich", status: "offline"}
    ];

    return (
        <div className={classes.dialogues}>
            <Dialog status={dialoguesData[0].status} companionName={dialoguesData[0].companionName} id={dialoguesData[0].id}/>
            <Dialog status={dialoguesData[1].status} companionName={dialoguesData[1].companionName} id={dialoguesData[1].id}/>
            <Dialog status={dialoguesData[2].status} companionName={dialoguesData[2].companionName} id={dialoguesData[2].id}/>
            <Dialog status={dialoguesData[3].status} companionName={dialoguesData[3].companionName} id={dialoguesData[3].id}/>
        </div>
    );
}

export default Dialogues;