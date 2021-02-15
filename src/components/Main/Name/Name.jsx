import React from 'react';
import classes from './Name.module.css';

const Name = (props) => {
    let materialsData = [
        {materialName: "Gd", imgLink: "https://bvb-alyans.ru/media/uploads/images/gadolinij.jpg"},
        {materialName: "Fe", imgLink: ""},
        {materialName: "FeNi", imgLink: ""},
    ];

    let materialsArray = materialsData
        .map(material => <option>{material.materialName}</option>);
    let materialsImgArray = materialsData
        .map(material => <option><img src={material.imgLink}/></option>);

    return (
        <div className={classes.name}>
            Input sample name:
            <div className={classes.nameInput}>
                <input value="sample name"/>
            </div>
            <select>
                {materialsArray}
            </select>
            <select>
                {materialsImgArray}
            </select>
        </div>
    );
}

export default Name;