import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileNav.module.scss';

const cx = classNames.bind(styles);
function ProfileNav() {
    return (
        <div className={cx('profile-nav')}>
            <p className={cx('profile-nav-title')}>Thông tin tài khoản</p>
            <ul className={cx('profile-nav-list')}>
                <button className={cx('profile-nav-item')}>
                    Thông tin cá nhân
                </button>
                <button className={cx('profile-nav-item')}>
                    Quản lí thanh toán
                </button>
                <button className={cx('profile-nav-item')}>
                    Lịch sử giao dịch
                </button>
                <button className={cx('profile-nav-item')}>
                    Dịch vụ đã mua
                </button>
                <button className={cx('profile-nav-item')}>Mã kích hoạt</button>
                <button className={cx('profile-nav-item')}>
                    Đăng xuất tài khoản
                </button>
            </ul>
        </div>
    );
}

export default ProfileNav;
