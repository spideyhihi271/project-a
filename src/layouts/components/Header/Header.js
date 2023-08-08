import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Popper from '~/components/Popper/';
import config from '~/configs';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Header() {
    const [isShow, setIsShow] = useState(false);
    const showMenu = () => {
        setIsShow(!isShow);
    };
    const closeMenu = () => {
        setIsShow(false);
    };
    const blockClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div className={cx('header-wrapper')}>
            <div className={cx('header-content')}>
                <div onClick={showMenu} className={cx('icon-menu')}>
                    <i className="fa-light fa-bars"></i>
                </div>
                <Link className={cx('content-logo')}>
                    <img
                        className={cx('content-logo')}
                        src={images.logo}
                        alt=""
                    />
                </Link>
                <nav className={cx('content-nav')}>
                    <div
                        onClick={closeMenu}
                        className={cx('module', { block: isShow })}
                    >
                        <ul onClick={blockClick} className={cx('nav-list')}>
                            <div
                                onClick={closeMenu}
                                className={cx('icon-close')}
                            >
                                <i className="fa-light fa-xmark"></i>
                            </div>
                            <li className={cx('nav-item')}>
                                <Link
                                    to={config.routes.home}
                                    className={cx('nav-link')}
                                >
                                    Trang chủ
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link
                                    to={config.routes.series}
                                    className={cx('nav-link')}
                                >
                                    Phim truyền hình
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link
                                    to={config.routes.movies}
                                    className={cx('nav-link')}
                                >
                                    Phim
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link
                                    to={config.routes.home}
                                    className={cx('nav-link')}
                                >
                                    Mới và phổ biến
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link
                                    to={config.routes.home}
                                    className={cx('nav-link')}
                                >
                                    Duyệt tìm theo ngôn ngữ
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link
                                    to={config.routes.package}
                                    className={cx('nav-link')}
                                >
                                    Gói dịch vụ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className={cx('content-actions')}>
                    <ul className={cx('actions-list')}>
                        <div className={cx('actions-item')}>
                            <Link
                                to={config.routes.search}
                                className={cx('actions-link')}
                            >
                                <i className="fa-light fa-magnifying-glass"></i>
                            </Link>
                        </div>
                        <div className={cx('action-item')}>
                            <Popper>
                                <i className="fa-light fa-bell"></i>
                            </Popper>
                        </div>
                        <div className={cx('action-item')}>
                            <Popper content="logger">
                                <div className={cx('logger-lable')}>
                                    <img
                                        className={cx('logger-avt')}
                                        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                                        alt=""
                                    />
                                    <div className={cx('logger-icon')}>
                                        <i className="fa-sharp fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </Popper>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
