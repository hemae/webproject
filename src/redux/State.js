import Main from "../components/Main/Main";
import Messenger from "../components/Messenger/Messenger";
import Ferromagnet from "../components/Ferromagnet/Ferromagnet";
import Antiferromagnet from "../components/Antiferromagnet/Antiferromagnet";
import Ferrimagnet from "../components/Ferrimagnet/Ferrimagnet";
import About from "../components/About/About";
import Language from "../components/Language/Language";
import {NavLink, Route} from "react-router-dom";
import Quantity from "../components/Main/Calculating/Quantity/Quantity";
import Property from "../components/Main/Properties/Property/Property";
import Chat from "../components/Messenger/Chat/Chat";
import Dialog from "../components/Messenger/Dialogues/Dialog/Dialog";
import {
    quantityData,
    materialsData,
    propertiesData,
    imgLinksData,
    dialoguesData,
    chatData,
    linksData,
    parametersData
} from "./Data"
import Parameter from "../components/Main/Name/Parameters/Parameter/Parameter";
import classes from "../components/NavBar/NavBar.module.css";
import React from "react";

let linksArray = linksData
    .map(link => (
        <div className={classes.item}>
            <NavLink to={link.url} activeClassName={classes.active}>{link.label}</NavLink>
        </div>
    ));

let quantityArray = quantityData
    .map(quantity => <Quantity quantity={quantity.quantity} imglink={quantity.imglink}/>);

let materialsArray = materialsData
    .map(material => <option>{material.materialName}</option>);

let materialsImgArray = materialsData
    .map(material => <option><img src={material.imgLink}/></option>);

let propertiesArray = propertiesData
    .map(property => <Property quantity={property.quantity} unit={property.unit}/>);

let chatArray = chatData
    .map(chat => <Chat companionName={chat.companionName} imgLink={chat.imgLink} status={chat.status}
                       author1={chat.author1} messageText1={chat.messageText1} author2={chat.author2}
                       messageText2={chat.messageText2}/>)

let dialoguesArray = dialoguesData
    .map(dialog => <Dialog status={dialog.status} companionName={dialog.companionName} id={dialog.id}/>)

let parametersArray = parametersData
    .map(parameter => <Parameter sampleParameter={parameter}/>)

let routeData = [
    {
        path: linksData[0].url,
        component: <Main quantityArray={quantityArray} materialsArray={materialsArray}
                         materialsImgArray={materialsImgArray} propertiesArray={propertiesArray}
                         mainLogo={imgLinksData.mainLogo} parametersArray={parametersArray}/>
    },
    {path: linksData[1].url, component: <Messenger dialoguesArray={dialoguesArray} chatArray={chatArray}/>},
    {path: linksData[2].url, component: <Ferromagnet/>},
    {path: linksData[3].url, component: <Antiferromagnet/>},
    {path: linksData[4].url, component: <Ferrimagnet/>},
    {path: linksData[5].url, component: <About/>},
    {path: linksData[6].url, component: <Language/>}
]; //

let routeArray = routeData
    .map(route => <Route path={route.path} render={() => route.component}/>);

let state = {
    linksArray: linksArray,
    routeArray: routeArray
};

export default state