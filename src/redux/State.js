import {
    quantityData,
    materialsData,
    propertiesData,
    imgLinksData,
    dialoguesData,
    linksData,
    parametersData
} from "./Data"
import {NavLink, Route} from "react-router-dom";
import React from "react";
import classes from "../components/NavBar/NavBar.module.css";
import Message from "../components/Messenger/ChatField/Chat/Message/Message";
import Main from "../components/Main/Main";
import Messenger from "../components/Messenger/Messenger";
import Ferromagnet from "../components/Ferromagnet/Ferromagnet";
import Antiferromagnet from "../components/Antiferromagnet/Antiferromagnet";
import Ferrimagnet from "../components/Ferrimagnet/Ferrimagnet";
import About from "../components/About/About";
import Language from "../components/Language/Language";
import Quantity from "../components/Main/Calculating/Quantity/Quantity";
import Property from "../components/Main/Properties/Property/Property";
import ChatField from "../components/Messenger/ChatField/ChatField";
import Dialog from "../components/Messenger/DialoguesField/Dialog/Dialog";
import Parameter from "../components/Main/Name/Parameters/Parameter/Parameter";


// functions for Messenger
export let addMessage = (companionId, messageText) => {
    let newMessage = {
        id: String(dialoguesData[Number(companionId)].messagesData.length),
        messageText: messageText,
        author: "me",
        sendingTime: "22:00"
    }
    let messageComp = <Message messageData={newMessage}/>
    messagesCompArray[Number(companionId)].push(messageComp)
}

export let funcsData = {
    addMessage: addMessage
}


// for NavBar
let linksArray = linksData
    .map(link => (
        <div className={classes.item}>
            <NavLink to={link.url} activeClassName={classes.active}>{link.label}</NavLink>
        </div>
    ));


// for Main
let parametersArray = parametersData
    .map(parameter => <Parameter sampleParameter={parameter}/>)

let materialsArray = materialsData
    .map(material => <option>{material.materialName}</option>);

let materialsImgArray = materialsData
    .map(material => <option><img src={material.imgLink}/></option>);

let propertiesArray = propertiesData
    .map(property => <Property quantity={property.quantity} unit={property.unit}/>);

let quantityArray = quantityData
    .map(quantity => <Quantity quantity={quantity.quantity} imglink={quantity.imglink}/>);


// for Messenger
let messagesDataArray = [];
for (let i = 0; i < dialoguesData.length; i += 1) {
    messagesDataArray.push(dialoguesData[i].messagesData)
}

let messagesCompArray = [];
for (let i = 0; i < messagesDataArray.length; i += 1) {
    let messagesComp = messagesDataArray[i]
        .map(message => <Message messageData={message}/>)
    messagesCompArray.push(messagesComp);
}

let dialoguesDataEdit = [];
for (let i = 0; i < dialoguesData.length; i += 1) {
    dialoguesDataEdit.push({
        companionInfo: dialoguesData[i].companionInfo,
        messagesArray: messagesCompArray[i]
    })
}

let dialoguesRouteArray = dialoguesDataEdit
    .map(dialog => <Route path={`/messenger/${dialog.companionInfo.companionId}`}
                          render={() => <ChatField dialogData={dialog} funcsData={funcsData}/>}/>)

let dialoguesLinksArray = dialoguesDataEdit
    .map(dialog => <Dialog dialogData={dialog}/>)

let routeData = [
    {
        path: linksData[0].url,
        component: <Main quantityArray={quantityArray} materialsArray={materialsArray}
                         materialsImgArray={materialsImgArray} propertiesArray={propertiesArray}
                         mainLogo={imgLinksData.mainLogo} parametersArray={parametersArray}/>
    },
    {
        path: linksData[1].url,
        component: <Messenger dialoguesRouteArray={dialoguesRouteArray} dialoguesLinksArray={dialoguesLinksArray}/>
    },
    {path: linksData[2].url, component: <Ferromagnet/>},
    {path: linksData[3].url, component: <Antiferromagnet/>},
    {path: linksData[4].url, component: <Ferrimagnet/>},
    {path: linksData[5].url, component: <About/>},
    {path: linksData[6].url, component: <Language/>}
];

let routeArray = routeData
    .map(route => <Route path={route.path} render={() => route.component}/>);

let state = {
    linksArray: linksArray,
    routeArray: routeArray
};


export default state