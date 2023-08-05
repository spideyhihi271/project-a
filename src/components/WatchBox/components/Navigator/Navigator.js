import React from 'react';
import classNames from 'classnames/bind';
import styles from './Navigator.module.scss';

const cx = classNames.bind(styles);
function Navigator() {
    return (
        <div className={cx('nav-wrapper')}>
            <header className={cx('nav-header')}>
                <button className={cx('nav-back')}>
                    <i class="fa-light fa-arrow-left"></i>
                </button>
                <button className={cx('nav-report')}>
                    <i className="fa-light fa-flag"></i>
                </button>
            </header>
            <footer className={cx('nav-footer')}>
                <div className={cx('nav-progress')}></div>
                <div className={cx('nav-actions')}>
                    <ul className={cx('action-list')}>
                        <li className={cx('action-item')}>
                            <button className={cx('action-btn')}>
                                <i className="fa-sharp fa-solid fa-play"></i>
                            </button>
                        </li>
                        <li className={cx('action-item')}>
                            <button className={cx('action-btn')}>
                                <i className="fa-light fa-rotate-left"></i>
                            </button>
                        </li>
                        <li className={cx('action-item')}>
                            <button className={cx('action-btn')}>
                                <i className="fa-light fa-rotate-left fa-flip-horizontal"></i>
                            </button>
                        </li>
                        <li className={cx('action-item')}>
                            <button className={cx('action-btn')}>
                                <i className="fa-light fa-volume"></i>
                            </button>
                        </li>
                    </ul>
                    <p className={cx('action-espison')}>
                        Khách sạn vương giả T2
                    </p>
                    <ul className={cx('action-list')}>
                        <li className={cx('action-item')}>
                            <button className={cx('action-btn')}>
                                <i className="fa-light fa-forward"></i>
                            </button>
                        </li>
                        <li className={cx('action-item')}>
                            <button className={cx('action-btn')}>
                                <i className="fa-light fa-rectangle-vertical-history"></i>
                            </button>
                        </li>
                        <li className={cx('action-item')}>
                            <button className={cx('action-btn')}>
                                <i className="fa-light fa-closed-captioning"></i>
                            </button>
                        </li>
                        <li className={cx('action-item')}>
                            <button className={cx('action-btn')}>
                                <i className="fa-light fa-expand-wide"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Navigator;
