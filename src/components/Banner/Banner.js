import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('banner-wrapper')}>
            <img
                className={cx('banner-thumb')}
                src="https://wallpaperaccess.com/full/1301014.jpg"
                alt=""
            />
            <div className={cx('banner-filter')}></div>
            <div className={cx('banner-info')}>
                <h1 className={cx('info-name')}>Dunkirk</h1>
                <p className={cx('info-description')}>
                    Những người lính Đồng minh từ Bỉ, Khối thịnh vượng chung và
                    Đế quốc Anh, và Pháp bị Quân đội Đức bao vây và sơ tán trong
                    một trận chiến khốc liệt trong Thế chiến II.
                </p>
                <div className={cx('info-more')}>
                    <p className={cx('info-tag')}>TOP 10</p>
                    <p className={cx('info-derector')}>Christopher Nolan</p>
                </div>
                <div className={cx('info-more')}>
                    <p className={cx('info-publics')}>2027</p>
                    <span className={cx('info-middle')}>
                        <i className="fa-duotone fa-circle"></i>
                    </span>
                    <p className={cx('info-genders')}>Hành động, Chiến tranh</p>
                </div>
                <div className={cx('info-mark')}>
                    <div className={cx('mark-icon')}>
                        <i className="fa-sharp fa-solid fa-fire"></i>
                    </div>
                    <p className={cx('mark-movie')}>8.7</p>
                    <p className={cx('mark-title')}>/10</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
