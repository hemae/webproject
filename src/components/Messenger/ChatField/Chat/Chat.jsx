import React from 'react';
import classes from './Chat.module.css';

const Chat = (props) => {
    return (
        <div className={classes.chat}>
            {props.messagesArray}
        </div>
    );
}

export default Chat;