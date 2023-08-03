import classNames from 'classnames/bind';
import React from 'react';
import styles from './Banner.module.scss';
const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('banner-wrapper')}>
            <img
                className={cx('banner-thumb')}
                src="https://occ-0-395-55.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeCCECNfaerQYHzjecod-YAtkaSK-IorupJ9TohYSUsZcWqWiz6eD6b01PQDuT0vnSVE7qqzbnWH7vT1uGPex4DirKjgqaSegjp6.webp?r=2e7"
                alt=""
            />
            <div className={cx('banner-content')}>
                <img
                    className={cx('content-name')}
                    src="https://occ-0-395-55.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQHsCYWiyvitWjSG9lu7AfKjGEgWlRV84HpczEf0QFBSE8ouh0oQo9RGilGFwqyIqlSWhIeTiNeXmMn3CSvZT1mCG-Au6z4xyQJwtdv-Ttyu.webp?r=6b8"
                    alt=""
                />
                <div className={cx('content-tag')}>
                    <div className={cx('tag-icon')}>
                        TOP <span className={cx('tag-num')}>10</span>
                    </div>
                    <p className={cx('tag-title')}>Số 1 thịnh hành hôm nay</p>
                </div>
                <p className={cx('content-description')}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia, consequuntur inventore eaque, assumenda quos eveniet
                    temporibus nostrum provident reiciendis quibusdam cum
                    similique perferendis magni quidem nesciunt veniam.
                    Officiis, id modi.
                </p>
                <div className={cx('content-actions')}>
                    
                </div>
            </div>
        </div>
    );
}

export default Banner;
