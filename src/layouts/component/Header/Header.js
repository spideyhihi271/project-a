import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header-container')}>
                <div className={cx('header-logo-nav')}>
                    <Link to={'/'} className={cx('logo')}>
                        <img
                            src="https://www.nicepng.com/png/full/223-2235489_want-logo-hbo-white.png"
                            alt=""
                        />
                    </Link>
                    <nav className={cx('navbar')}>
                        <ul className={cx('nav-list')}>
                            <Link to={'/'} className={cx('nav-list-item')}>
                                Trang chủ
                            </Link>
                            <Link to={'/1'} className={cx('nav-list-item')}>
                                Phim điện ảnh
                            </Link>
                            <Link to={'/2'} className={cx('nav-list-item')}>
                                Phim bộ
                            </Link>
                            <Link to={'/4'} className={cx('nav-list-item')}>
                                Gói dịch vụ
                            </Link>
                            <Link to={'/5'} className={cx('nav-list-item')}>
                                Nhiều hơn
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className="actions">
                    <ul className={cx('action-list')}></ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
