import React from 'react';
import classes from './Name.module.css';

const Name = () => {
    return (
        <div className={classes.name}>
            Insert sample name:
            <input value="sample name" />
            <select>
                <option>Gd</option>
                <option>Fe</option>
                <option>FeNi</option>
            </select>
            <img src="https://bvb-alyans.ru/media/uploads/images/gadolinij.jpg" />
        </div>
    );
}

export default Name;