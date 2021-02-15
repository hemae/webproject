import React from 'react';
import classes from './Dialogues.module.css';
import Dialog from "./Dialog/Dialog";
import {NavLink} from "react-router-dom";
import Chat from "../Chat/Chat";

const Dialogues = (props) => {
    let dialoguesData = [
        {id: "1", companionName: "Svalov", status: "offline"},
        {id: "2", companionName: "Vas'kovskiy", status: "online"},
        {id: "3", companionName: "Volegov", status: "offline"},
        {id: "4", companionName: "Dmitriy Sergeevich", status: "offline"}
    ];

    let dialoguesArray = dialoguesData
        .map(dialog => <Dialog status={dialog.status} companionName={dialog.companionName} id={dialog.id}/>)

    return (
        <div className={classes.dialogues}>
            {dialoguesArray}
        </div>
    );
}

export default Dialogues;