import classNames from 'classnames/bind';

import styles from './AuthForm.module.scss';
const cx = classNames.bind(styles);
function AuthForm() {
    return (
        <div className={cx('auth-form')}>
            <div action="" className={cx('auth-form-main')}>
                <p className={cx('signin-title')}>
                    Đăng nhập vào <span>Beecine</span>
                </p>
                <p className={cx('signin-description')}>
                    Tận hưởng hơn 100.000 nội dung siêu hấp dẫn tại hệ thống của
                    Beecine
                </p>
                <div className={cx('signin-box')}>
                    <div className={cx('signin-box-menthods')}>
                        <button className={cx('menthod')}>
                            <i className="fa-brands fa-google"></i>
                            Đăng nhập bằng Email
                        </button>
                        <button className={cx('menthod')}>
                            <i className="fa-brands fa-facebook-f"></i>
                            Đăng nhập bằng Facebook
                        </button>
                        <button className={cx('menthod')}>
                            <i className="fa-sharp fa-solid fa-phone"></i>
                            Đăng nhập bằng số điện thoại
                        </button>
                    </div>
                    <div className={cx('signin-box-line')}>/</div>
                    <form className={cx('signin-box-form')}>
                        <input
                            type="text"
                            className={cx('form-input')}
                            placeholder="Email..."
                        />
                        <input
                            type="text"
                            className={cx('form-input')}
                            placeholder="Mật khẩu..."
                        />
                        <button>Đăng nhập</button>
                    </form>
                </div>
                <button className={cx('signin-forgot')}>Quên mật khẩu?</button>
            </div>
            <div className={cx('auth-form-footer')}>
                <a href="/">Policy</a>
                <p>Compyri</p>
            </div>
        </div>
    );
}

export default AuthForm;
