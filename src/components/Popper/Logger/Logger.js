import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Logger.module.scss';
import config from '~/configs';

const cx = classNames.bind(styles);
function Logger() {
    return (
        <div className={cx('logger-wrapper')}>
            <ul className={cx('slot-list')}>
                <li className={cx('slot-item')}>
                    <Button
                        text
                        leftImage={
                            'https://i.pinimg.com/originals/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a.png'
                        }
                    >
                        Hạ
                    </Button>
                </li>
                <li className={cx('slot-item')}>
                    <Button
                        text
                        leftImage={
                            'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
                        }
                    >
                        Nguyên
                    </Button>
                </li>
                <li className={cx('slot-item')}>
                    <Button
                        text
                        leftImage={
                            'https://i.pinimg.com/originals/c0/8e/6c/c08e6c9595e03202a46a95f66578799f.png'
                        }
                    >
                        Đào Thư
                    </Button>
                </li>
                <li className={cx('slot-item')}>
                    <Button
                        text
                        leftImage={
                            'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png'
                        }
                    >
                        Thu Hà
                    </Button>
                </li>
            </ul>
            <nav className={cx('nav-list')}>
                <li className={cx('nav-item')}>
                    <Button
                        text
                        leftIcon={
                            <i className="fa-sharp fa-light fa-pencil"></i>
                        }
                    >
                        Quản lí hồ sơ
                    </Button>
                </li>
                <li className={cx('nav-item')}>
                    <Button
                        text
                        leftIcon={<i className="fa-regular fa-user"></i>}
                    >
                        Tài khoản
                    </Button>
                </li>
                <li className={cx('nav-item')}>
                    <Button
                        text
                        leftIcon={
                            <i className="fa-sharp fa-regular fa-circle-exclamation"></i>
                        }
                    >
                        Trung tâm hỗ trợ
                    </Button>
                </li>
                <li className={cx('nav-item')}>
                    <Button
                        to={config.routes.signin}
                        text
                        leftIcon={
                            <i className="fa-regular fa-right-from-bracket"></i>
                        }
                    >
                        Đăng xuất
                    </Button>
                </li>
            </nav>
        </div>
    );
}

export default Logger;
