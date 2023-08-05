import React from 'react';
import classNames from 'classnames/bind';
import styles from './AuthForm.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AuthForm() {
    return (
        <div className={cx('auth-wrapper ')}>
            <h1 className={cx('auth-title')}>Đăng nhập vào Netflix</h1>
            <p className={cx('auth-description')}>
                Tận hưởng hơn 100.000 nội dung mới được cập nhật liên tục hằng
                ngày. Đăng nhập ngay !
            </p>
            <div className={cx('auth-container')}>
                <div className={cx('container-side')}>
                    <ul className={cx('actions-list')}>
                        <li className={cx('actions-item')}>
                            <button className={cx('actions-btn')}>
                                Chính sách người dùng
                                <i className="fa-light fa-circle"></i>
                            </button>
                        </li>
                        <li className={cx('actions-item')}>
                            <button className={cx('actions-btn')}>
                                Điều khoản bảo mật
                                <i className="fa-light fa-eye-slash"></i>
                            </button>
                        </li>
                        <li className={cx('actions-item')}>
                            <button className={cx('actions-btn')}>
                                Đăng nhập vào tài khoản
                                <i className="fa-light fa-arrow-right"></i>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={cx('container-middle')}>/</div>
                <div className={cx('container-main')}>
                    <ul className={cx('menthod-list')}>
                        <li className={cx('menthod-item')}>
                            <button className={cx('menthod-btn')}>
                                <i className="fa-brands fa-google"></i>
                                Đăng nhập với Google
                            </button>
                        </li>
                        <li className={cx('menthod-item')}>
                            <button className={cx('menthod-btn')}>
                                <i className="fa-brands fa-facebook-f"></i>
                                Đăng nhập với Facebook
                            </button>
                        </li>
                        <li className={cx('menthod-item')}>
                            <button className={cx('menthod-btn')}>
                                <i class="fa-solid fa-mobile-button"></i>
                                Đăng nhập với số điện thoại
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <Link to={'/'} className={cx('auth-forgot')}>
                Quên mật khẩu?
            </Link>
        </div>
    );
}

export default AuthForm;
