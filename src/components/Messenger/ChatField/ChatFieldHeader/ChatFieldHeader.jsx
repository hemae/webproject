import React from 'react';
import classes from './ChatFieldHeader.module.css';

const ChatFieldHeader = (props) => {
    return (
        <div className={classes.chatFieldHeader}>
            <img src={props.companionInfo.avaImgLink}/>
            {props.companionInfo.companionName}, {props.companionInfo.status}
        </div>
    );
}

export default ChatFieldHeader;