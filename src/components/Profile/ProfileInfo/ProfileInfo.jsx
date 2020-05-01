import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
           {/* <div>
                <img src='https://ruskweb.ru/wp-content/uploads/2017/11/tehnologii-kotoryie-izmenyat-mir.jpeg'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;