import React from 'react';
import classes from './ChatHeader.module.css';

const ChatHeader = (props) => {
    return (
        <div className={classes.chatHeader}>
            {props.companionName}
            <img src={props.imgLink}/>
            {props.status}
        </div>
    );
}

export default ChatHeader;