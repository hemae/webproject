import React from 'react';
import classes from './Messenger.module.css';
import Dialogues from "./Dialogues/Dialogues";
import Chat from "./Chat/Chat";

const Messenger = (props) => {
    let chatData = [
        {companionName: "Svalov",
               imgLink: "",
                status: "last seen at 07:39",
               author1: "Svalov",
               author2: "me",
          messageText1: "Андрей, спасибо за проделанную работу!",
          messageText2: "Буду ждать ответа рецензента!"}
    ];

    return (
        <div className={classes.messenger}>
            <Dialogues />
            <div className={classes.chatWrapper}>
                <Chat companionName={chatData[0].companionName} imgLink={chatData[0].imgLink} status={chatData[0].status} author1={chatData[0].author1} messageText1={chatData[0].messageText1} author2={chatData[0].author2} messageText2={chatData[0].messageText2}/>
            </div>
        </div>
    );
}

export default Messenger;