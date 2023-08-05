import React from 'react';
import classNames from 'classnames/bind';
import styles from './Pause.module.scss';

const cx = classNames.bind(styles);
function Pause() {
    return (
        <div className={cx('pause-wrapper')}>
            <div className={cx('pause-filter')}></div>
            <div className={cx('pause-content')}>
                <p className={cx('content-notify')}>Bạn đang xem</p>
                <h1 className={cx('content-name')}>Khách sạn vương giả</h1>
                <p className={cx('content-espison')}>Tập 1: Khởi đầu</p>
                <p className={cx('content-description')}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo est cupiditate itaque minima velit veniam voluptate,
                    distinctio magni, ut ducimus deserunt non aut exercitationem
                    aperiam ipsum alias. Vel, exercitationem ullam.
                </p>
            </div>
        </div>
    );
}

export default Pause;
