import classNames from 'classnames/bind';

import styles from './Pack.module.scss';
import PackList from './PackList';
const cx = classNames.bind(styles);
function Pack() {
    return (
        <div className={cx('pack-wrapper')}>
            <h1 className={cx('pack-title')}>
                Thật dễ dàng để bắt đầu với <span>Netflix</span>
            </h1>
            <p className={cx('pack-description')}>
                Và nó miễn phí. Hai điều mà mọi người đều yêu thích.
            </p>
            <div className={cx('pack-more')}>
                <ul className={cx('more-list')}>
                    <li className={cx('more-item')}>
                        <p className={cx('more-content')}>
                            <i class="fa-regular fa-check"></i>
                            Không cần thẻ tín dụng
                        </p>
                    </li>
                    <li className={cx('more-item')}>
                        <p className={cx('more-content')}>
                            <i class="fa-regular fa-check"></i>
                            Dễ dàng đăng kí
                        </p>
                    </li>
                    <li className={cx('more-item')}>
                        <p className={cx('more-content')}>
                            <i class="fa-regular fa-check"></i>
                            Hủy mọi lúc
                        </p>
                    </li>
                </ul>
            </div>
            <PackList />
        </div>
    );
}

export default Pack;
