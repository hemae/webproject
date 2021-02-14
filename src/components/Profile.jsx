import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                <img src="https://km.insma.urfu.ru/documents/logotype/cm_544x250.png" />
            </div>
            <div>
                material name + material photo
            </div>
            <div>
                What's need calctulate:
                <div>
                    m(T, H)
                </div>
                <div className={classes.differential}>
                    <div className={`${classes.item} ${classes.active}`}>
                        -dSm(T)
                    </div>
                    <div className={classes.item}>
                        -dSmax(H)
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;