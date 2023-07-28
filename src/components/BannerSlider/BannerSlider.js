import classNames from 'classnames/bind';
import styles from './BannerSlider.module.scss';
const cx = classNames.bind(styles);
function BannerSlider() {
    return (
        <div className={cx('banner')}>
            <img
                className={cx('banner-bg')}
                src="https://cdn.wallpapersafari.com/98/63/wAV8tr.png"
                alt=""
            />
            <div className={cx('banner-content')}>
                <p className={cx('banner-content-rating')}>
                    <span>RATING</span>
                    <b>8.0</b>
                    <span>/10</span>
                </p>
                <div className={cx('info')}>
                    <div className={cx('info-genders')}>
                        <p className={cx('info-genders-item')}>DRAMA</p>
                        <span className={cx('line')}></span>
                        <p className={cx('info-genders-item')}>ROMANCE</p>
                        <span className={cx('line')}></span>
                        <p className={cx('info-genders-item')}>SCI-FI</p>
                    </div>
                    <p className={cx('info-name')}>Her</p>
                    <p className={cx('info-more')}>
                        <b>2013</b>
                        <span className={cx('line')}></span>
                        <b>ĐẠO DIỄN:</b>
                        <span>Spike Jonze</span>
                        <span className={cx('line')}></span>
                        <b>DIỄN VIÊN:</b>
                        <span>Spike Jonze,</span>
                        <span>Spike Jonze,</span>
                        <span>Spike Jonze,</span>
                        <span>Spike Jonze,</span>
                    </p>
                    <p className={cx('info-description')}>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum dolorum suscipit incidunt? Sint laudantium quae
                        obcaecati architecto asperiores mollitia consequatur,
                        repellendus error magni minima blanditiis aperiam,
                        laboriosam dolores nesciunt impedit!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BannerSlider;
