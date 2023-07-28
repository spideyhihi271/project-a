import React from 'react';
import classNames from 'classnames/bind';

import styles from './DetailMovie.module.scss';
const cx = classNames.bind(styles);

function DetailMovieHeader() {
    return (
        <header className={cx('detail-header')}>
            <img
                className={cx('detail-header-bg')}
                src="https://images6.alphacoders.com/116/1166940.jpg"
                alt=""
            />
            <div className={cx('header-content')}>
                <img
                    className={cx('header-content-thumbnail')}
                    src="https://m.media-amazon.com/images/I/61Mde7eiFbL.jpg"
                    alt=""
                />
                <div className={cx('header-content-info')}></div>
            </div>
        </header>
    );
}

export default DetailMovieHeader;
