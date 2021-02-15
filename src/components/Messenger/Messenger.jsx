import React from 'react';
import classes from './Messenger.module.css';
import Dialogues from "./Dialogues/Dialogues";
import Chat from "./Chat/Chat";

const Messenger = (props) => {
    let chatArray = props.chatData
        .map(chat => <Chat companionName={chat.companionName} imgLink={chat.imgLink} status={chat.status}
                           author1={chat.author1} messageText1={chat.messageText1} author2={chat.author2}
                           messageText2={chat.messageText2}/>)

    return (
        <div className={classes.messenger}>
            <Dialogues dialoguesData={props.dialoguesData}/>
            <div className={classes.chatWrapper}>
                {chatArray}
            </div>
        </div>
    );
}

export default Messenger;