import React from 'react';
import classNames from 'classnames/bind';
import styles from './Notify.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Notify() {
    return (
        <div className={cx('notify-wrapper')}>
            <h4 className={cx('notify-title')}>Thông báo</h4>
            <ul className={cx('notify-list')}>
                <li className={cx('notify-item')}>
                    <Link to={''} className={cx('notify-link')}>
                        <div className={cx('notify-content')}>
                            <h4 className={cx('content-title')}>
                                Hùng Long Tranh Bá 2 đã ra mắt. Xem ngay thôi
                            </h4>
                            <p className={cx('content-public')}>3 ngày trước</p>
                        </div>
                        <img
                            className={cx('notify-thumb')}
                            src="https://c4.wallpaperflare.com/wallpaper/253/462/372/action-adventure-fantasy-film-wallpaper-preview.jpg"
                            alt=""
                        />
                    </Link>
                </li>
                <li className={cx('notify-item')}>
                    <Link to={''} className={cx('notify-link')}>
                        <div className={cx('notify-content')}>
                            <h4 className={cx('content-title')}>
                                Hùng Long Tranh Bá 2 đã ra mắt. Xem ngay thôi
                            </h4>
                            <p className={cx('content-public')}>3 ngày trước</p>
                        </div>
                        <img
                            className={cx('notify-thumb')}
                            src="https://c4.wallpaperflare.com/wallpaper/253/462/372/action-adventure-fantasy-film-wallpaper-preview.jpg"
                            alt=""
                        />
                    </Link>
                </li>
                <li className={cx('notify-item')}>
                    <Link to={''} className={cx('notify-link')}>
                        <div className={cx('notify-content')}>
                            <h4 className={cx('content-title')}>
                                Hùng Long Tranh Bá 2 đã ra mắt. Xem ngay thôi
                            </h4>
                            <p className={cx('content-public')}>3 ngày trước</p>
                        </div>
                        <img
                            className={cx('notify-thumb')}
                            src="https://c4.wallpaperflare.com/wallpaper/253/462/372/action-adventure-fantasy-film-wallpaper-preview.jpg"
                            alt=""
                        />
                    </Link>
                </li>
                <li className={cx('notify-item')}>
                    <Link to={''} className={cx('notify-link')}>
                        <div className={cx('notify-content')}>
                            <h4 className={cx('content-title')}>
                                Hùng Long Tranh Bá 2 đã ra mắt. Xem ngay thôi
                            </h4>
                            <p className={cx('content-public')}>3 ngày trước</p>
                        </div>
                        <img
                            className={cx('notify-thumb')}
                            src="https://c4.wallpaperflare.com/wallpaper/253/462/372/action-adventure-fantasy-film-wallpaper-preview.jpg"
                            alt=""
                        />
                    </Link>
                </li>
                <li className={cx('notify-item')}>
                    <Link to={''} className={cx('notify-link')}>
                        <div className={cx('notify-content')}>
                            <h4 className={cx('content-title')}>
                                Hùng Long Tranh Bá 2 đã ra mắt. Xem ngay thôi
                            </h4>
                            <p className={cx('content-public')}>3 ngày trước</p>
                        </div>
                        <img
                            className={cx('notify-thumb')}
                            src="https://c4.wallpaperflare.com/wallpaper/253/462/372/action-adventure-fantasy-film-wallpaper-preview.jpg"
                            alt=""
                        />
                    </Link>
                </li>
                <li className={cx('notify-item')}>
                    <Link to={''} className={cx('notify-link')}>
                        <div className={cx('notify-content')}>
                            <h4 className={cx('content-title')}>
                                Hùng Long Tranh Bá 2 đã ra mắt. Xem ngay thôi
                            </h4>
                            <p className={cx('content-public')}>3 ngày trước</p>
                        </div>
                        <img
                            className={cx('notify-thumb')}
                            src="https://c4.wallpaperflare.com/wallpaper/253/462/372/action-adventure-fantasy-film-wallpaper-preview.jpg"
                            alt=""
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Notify;
