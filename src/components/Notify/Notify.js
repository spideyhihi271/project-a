import classNames from 'classnames/bind';
import styles from './Notify.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Notify() {
    return (
        <div className={cx('notify')}>
            <p className={cx('notify-title')}>Thông báo</p>
            <div className={cx('notify-list')}>
                <div className={cx('notify-item')}>
                    <div className={cx('notify-item-info')}>
                        <Link to={''} className={cx('info-name')}>
                            Train to busan đã ra mắt, xem ngay thôi nào!!!
                        </Link>
                        <p className={cx('info-times')}>7 phút trước</p>
                    </div>
                    <img className={cx('notify-item-avt')} src="" alt="" />
                </div>
                <div className={cx('notify-item')}>
                    <div className={cx('notify-item-info')}>
                        <Link to={''} className={cx('info-name')}>
                            THE BATMAN: Nghệ thuật kể chuyện bằng hình ảnh & âm
                            thanh
                        </Link>
                        <p className={cx('info-times')}>7 phút trước</p>
                    </div>
                    <img className={cx('notify-item-avt')} src="" alt="" />
                </div>
                <div className={cx('notify-item')}>
                    <div className={cx('notify-item-info')}>
                        <Link to={''} className={cx('info-name')}>
                            Train to busan đã ra mắt, xem ngay thôi nào!!!
                        </Link>
                        <p className={cx('info-times')}>7 phút trước</p>
                    </div>
                    <img className={cx('notify-item-avt')} src="" alt="" />
                </div>
                <div className={cx('notify-item')}>
                    <div className={cx('notify-item-info')}>
                        <Link to={''} className={cx('info-name')}>
                            THE BATMAN: Nghệ thuật kể chuyện bằng hình ảnh & âm
                            thanh
                        </Link>
                        <p className={cx('info-times')}>7 phút trước</p>
                    </div>
                    <img className={cx('notify-item-avt')} src="" alt="" />
                </div>
                <div className={cx('notify-item')}>
                    <div className={cx('notify-item-info')}>
                        <Link to={''} className={cx('info-name')}>
                            Train to busan đã ra mắt, xem ngay thôi nào!!!
                        </Link>
                        <p className={cx('info-times')}>7 phút trước</p>
                    </div>
                    <img className={cx('notify-item-avt')} src="" alt="" />
                </div>
                <div className={cx('notify-item')}>
                    <div className={cx('notify-item-info')}>
                        <Link to={''} className={cx('info-name')}>
                            THE BATMAN: Nghệ thuật kể chuyện bằng hình ảnh & âm
                            thanh
                        </Link>
                        <p className={cx('info-times')}>7 phút trước</p>
                    </div>
                    <img className={cx('notify-item-avt')} src="" alt="" />
                </div>
                <div className={cx('notify-item')}>
                    <div className={cx('notify-item-info')}>
                        <Link to={''} className={cx('info-name')}>
                            Train to busan đã ra mắt, xem ngay thôi nào!!!
                        </Link>
                        <p className={cx('info-times')}>7 phút trước</p>
                    </div>
                    <img className={cx('notify-item-avt')} src="" alt="" />
                </div>
                <div className={cx('notify-item')}>
                    <div className={cx('notify-item-info')}>
                        <Link to={''} className={cx('info-name')}>
                            THE BATMAN: Nghệ thuật kể chuyện bằng hình ảnh & âm
                            thanh
                        </Link>
                        <p className={cx('info-times')}>7 phút trước</p>
                    </div>
                    <img className={cx('notify-item-avt')} src="" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Notify;
