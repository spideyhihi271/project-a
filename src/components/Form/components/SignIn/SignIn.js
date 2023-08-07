import classNames from 'classnames/bind';

// Children Component
import Input from '~/components/Input';

import styles from './SignIn.module.scss';
import { Link } from 'react-router-dom';
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
                            <button className={cx('menthod-btn')}>
                                <i className="fa-brands fa-google"></i>
                                Đăng nhâp bang gg
                            </button>
                        </li>
                        <li className={cx('menthod-item')}>
                            <button className={cx('menthod-btn')}>
                                <i className="fa-brands fa-google"></i>
                                Đăng nhâp bang gg
                            </button>
                        </li>
                    </ul>
                </div>
                <p className={cx('form-change')}>Hoặc</p>
                <div className={cx('form-input')}>
                    <ul className={cx('input-list')}>
                        <li className={cx('input-item')}>
                            <Input value={''} />
                        </li>
                        <li className={cx('input-item')}>
                            <Input value={''} />
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
