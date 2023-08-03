import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Default.module.scss';
const cx = classNames.bind(styles);
function Default() {
    return (
        <div className={cx('default-wrapper')}>
            <div className={cx('default-tag')}>#Trending</div>
            <img
                className={cx('default-thumb')}
                src="https://images2.thanhnien.vn/Uploaded/nhuvnq/2022_04_02/new-cover-2-1212.jpg"
                alt=""
            />
            <img
                className={cx('default-brand')}
                src={images.logoShort}
                alt=""
            />
            <div className={cx('default-hover')}>
                <div className={cx('hover-filter')}></div>
                <div className={cx('hover-info')}>
                    <p className={cx('info-name')}>Em và Trịnh</p>
                    <ul className={cx('info-more')}>
                        <ul className={cx('more-list')}>
                            <li className={cx('more-item')}>Lãng mạn</li>
                            <li className={cx('more-item')}>120m</li>
                            <li className={cx('more-item')}>16+</li>
                            <li className={cx('more-item')}>HD+</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className={cx('default-timer')}></div>
        </div>
    );
}

export default Default;
