import React from 'react';
import classes from './Chat.module.css';
import Message from "./Message/Message";
import ChatHeader from "./ChatHeader/ChatHeader";

const Chat = (props) => {
    return (
        <div className={classes.chat}>
            <ChatHeader companionName={props.companionName} imgLink={props.imgLink} status={props.status}/>
            <Message author={props.author1} messageText={props.messageText1}/>
            <Message author={props.author2} messageText={props.messageText2}/>
        </div>
    );
}

export default Chat;