import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.messageData.author}: {props.messageData.messageText}, {props.messageData.sendingTime}
        </div>
    );
}

export default Message;