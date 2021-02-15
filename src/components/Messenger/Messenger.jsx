import React from 'react';
import classes from './Messenger.module.css';
import Dialogues from "./Dialogues/Dialogues";
import Chat from "./Chat/Chat";

const Messenger = (props) => {
    let chatData = [
        {
            companionName: "Svalov",
            imgLink: "",
            status: "last seen at 07:39",
            author1: "Svalov",
            author2: "me",
            messageText1: "Андрей, спасибо за проделанную работу!",
            messageText2: "Буду ждать ответа рецензента!"
        }
    ];

    let chatArray = chatData
        .map(chat => <Chat companionName={chat.companionName} imgLink={chat.imgLink} status={chat.status}
                           author1={chat.author1} messageText1={chat.messageText1} author2={chat.author2}
                           messageText2={chat.messageText2}/>)

    return (
        <div className={classes.messenger}>
            <Dialogues/>
            <div className={classes.chatWrapper}>
                {chatArray}
            </div>
        </div>
    );
}

export default Messenger;