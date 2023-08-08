import React from 'react';
import classNames from 'classnames/bind';
import styles from './Pause.module.scss';

const cx = classNames.bind(styles);
function Pause({ data }) {
    return (
        <div className={cx('pause-wrapper')}>
            <div className={cx('pause-filter')}></div>
            <div className={cx('pause-content')}>
                <p className={cx('content-notify')}>Bạn đang xem</p>
                <h1 className={cx('content-name')}>{data.title}</h1>
                <p className={cx('content-espison')}>Tập 1: Khởi đầu</p>
                <p className={cx('content-description')}>{data.description}</p>
            </div>
        </div>
    );
}

export default Pause;
