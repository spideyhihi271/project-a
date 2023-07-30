import classNames from 'classnames/bind';
import styles from './ProfileContent.module.scss';

const cx = classNames.bind(styles);
function ProfileGeneral() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('profile-general')}>
                <p className={cx('profile-general-title')}>Hồ sơ của bạn</p>
                <div className={cx('profile-general-header')}>
                    <div className={cx('general-info')}>
                        <p className={cx('general-info-name')}>0792588626</p>
                        <div className={cx('general-info-more')}>
                            <p className={cx('profile-key')}>
                                <span>Giới tính:</span>
                                Chưa cập nhật
                            </p>
                            <p className={cx('profile-key')}>
                                <span>Sinh nhật:</span>
                                Chưa cập nhật
                            </p>
                        </div>
                    </div>
                    <button className={cx('general-change')}>Thay đổi</button>
                </div>
                <p className={cx('profile-general-title')}>
                    Tài khoản và bảo mật
                </p>
                <ul className={cx('profile-general-list')}>
                    <li className={cx('profile-general-item')}>
                        <p className={cx('profile-key')}>
                            <span>Tài khoản</span>
                            0792588626
                        </p>
                        <button className={cx('general-change')}>
                            Thay đổi
                        </button>
                    </li>
                    <li className={cx('profile-general-item')}>
                        <p className={cx('profile-key')}>
                            <span>ID:</span>
                            04705758
                        </p>
                        <button className={cx('general-change')}>
                            Thay đổi
                        </button>
                    </li>
                    <li className={cx('profile-general-item')}>
                        <p className={cx('profile-key')}>
                            <span>Email:</span>
                            Chưa cập nhật
                        </p>
                        <button className={cx('general-change')}>
                            Thay đổi
                        </button>
                    </li>
                    <li className={cx('profile-general-item')}>
                        <p className={cx('profile-key')}>
                            <span>Khu vực:</span>
                            Chưa cập nhật
                        </p>
                        <button className={cx('general-change')}>
                            Thay đổi
                        </button>
                    </li>
                    <li className={cx('profile-general-item')}>
                        <p className={cx('profile-key')}>
                            <span>Mật khẩu:</span>
                           
                        </p>
                        <button className={cx('general-change')}>
                            Thay đổi
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileGeneral;
