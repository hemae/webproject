import React from 'react';
import classes from './ChatField.module.css';
import ChatFieldHeader from "./ChatFieldHeader/ChatFieldHeader";
import Chat from "./Chat/Chat";

const ChatField = (props) => {
    // let getTextMessage = React.createRef();
    //
    // let sendMessage = () => {
    //     let text = getTextMessage.current.value;
    //     alert(text);
    // };

    return (
        <div className={classes.chatField}>
            <ChatFieldHeader companionInfo={props.dialogData.companionInfo}/>
            <Chat messagesArray={props.dialogData.messagesArray}/>
            <textarea></textarea>
            <button>Send</button>
        </div>
    );
}

export default ChatField;