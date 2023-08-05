import React from 'react';
import classNames from 'classnames/bind';

import video from '~/assets/videos/tearser.mp4';
import styles from './WatchBox.module.scss';
import Pause from './components/Pause';
import Navigator from './components/Navigator';

const cx = classNames.bind(styles);
function WatchBox() {
    return (
        <div className={cx('watch-wrapper')}>
            <video
                className={cx('watch-content')}
                src={video}
                autoPlay
                muted
            ></video>

            <Navigator />
            {/* <Pause /> */}
        </div>
    );
}

export default WatchBox;
