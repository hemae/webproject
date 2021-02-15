import React from 'react';
import classes from './Name.module.css';

const Name = (props) => {
    let materialsData = [
        {materialName: "Gd", imgLink: "https://bvb-alyans.ru/media/uploads/images/gadolinij.jpg"},
        {materialName: "Fe", imgLink: ""},
        {materialName: "FeNi", imgLink: ""},
    ];

    return (
        <div className={classes.name}>
            Insert sample name:
            <div className={classes.nameInput}>
                <input value="sample name" />
            </div>
            <select>
                <option>{materialsData[0].materialName}</option>
                <option>{materialsData[1].materialName}</option>
                <option>{materialsData[2].materialName}</option>
            </select>
            <img src={materialsData[0].imgLink} />
        </div>
    );
}

export default Name;