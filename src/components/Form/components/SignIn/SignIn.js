import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// Children Component
import Input from '~/components/Input';

import styles from './SignIn.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);
function SignIn() {
    return (
        <div className={cx('form-wrapper')}>
            <h2 className={cx('form-title')}>Đăng nhập</h2>
            <p className={cx('form-description')}>
                Chào mừng bạn trở lại, bạn chưa bỏ lỡ điều gì đâu
            </p>
            <form action="" className={cx('form-container')}>
                <div className={cx('form-menthod')}>
                    <ul className={cx('menthod-list')}>
                        <li className={cx('menthod-item')}>
                            <button
                                className={cx('menthod-btn')}
                                id="login-with-gg"
                            >
                                <i className="fa-brands fa-google"></i>
                                Đăng nhâp bằng Google
                            </button>
                        </li>
                        <li className={cx('menthod-item')}>
                            <button className={cx('menthod-btn')}>
                                <i
                                    className="fa-brands fa-facebook-f"
                                    style={{ color: '#2b6dde' }}
                                ></i>
                                Đăng nhâp bằng Facebook
                            </button>
                        </li>
                    </ul>
                </div>
                <p className={cx('form-change')}>Hoặc</p>
                <div className={cx('form-input')}>
                    <ul className={cx('input-list')}>
                        <li className={cx('input-item')}>
                            <Input value={''} lable="Email" />
                        </li>
                        <li className={cx('input-item')}>
                            <Input value={''} lable="Mật khẩu" />
                        </li>
                    </ul>
                </div>
                <div className={cx('form-actions')}>
                    <div className={cx('actions-remember')}>
                        <input
                            type="checkbox"
                            id="remember"
                            className={cx('remember-checkbox')}
                        />
                        <label
                            htmlFor="remember"
                            className={cx('remember-lable')}
                        >
                            Ghi nhớ tôi
                        </label>
                    </div>
                    <button className={cx('actions-forgot')}>
                        Quên mật khẩu
                    </button>
                </div>
                <button className={cx('form-submut')}>Đăng nhập</button>
                <p className={cx('form-change')}>
                    Chưa có tài khoản?
                    <Link to={''} className={cx('form-change-link')}>
                        Đăng kí
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default SignIn;
