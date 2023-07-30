import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileContent.module.scss';
import ProfileGeneral from './ProfileGeneral';

const cx = classNames.bind(styles);
function ProfileContent({ viewCase }) {
    return (
        <div className={cx('profile-content')}>
            <ProfileGeneral />
        </div>
    );
}

export default ProfileContent;
