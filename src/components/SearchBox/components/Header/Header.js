import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('search-header')}>
            <div className={cx('search-box')}>
                <input
                    type="text"
                    className={cx('search-input')}
                    placeholder="Tìm kiếm phim, nội dung, sự kiện,.. "
                />
                <button className={cx('search-clear')}></button>
                <button className={cx('search-loader')}></button>
                <button className={cx('search-btn')}>Tìm kiếm</button>
            </div>
            <h1 className={cx('search-title')}>Từ khóa</h1>
            <p className={cx('search-description')}>
                Hơn 10.000 thiết kế, hình minh họa và yếu tố đồ họa tìm kiếm đầy
                cảm hứng
            </p>
        </header>
    );
}

export default Header;
