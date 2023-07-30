import classNames from 'classnames/bind';
import styles from './BannerSlider.module.scss';
import NavSlider from './NavSlider';
import Button from '../Button';
const cx = classNames.bind(styles);
function BannerSlider() {
    return (
        <div className={cx('banner')}>
            <div className={cx('banner-filter')}></div>
            <img
                className={cx('banner-bg')}
                src="https://images2.thanhnien.vn/Uploaded/nhuvnq/2022_04_02/new-cover-2-1212.jpg"
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
                        <p className={cx('info-genders-item')}>Phim Việt</p>
                        <span className={cx('line')}></span>
                        <p className={cx('info-genders-item')}>Lãng mạn</p>
                        <span className={cx('line')}></span>
                        <p className={cx('info-genders-item')}>Tâm lí</p>
                    </div>
                    <p className={cx('info-name')}>Em và Trịnh</p>
                    <p className={cx('info-more')}>
                        <b>2023</b>
                        <span className={cx('line')}></span>
                        <b>ĐẠO DIỄN:</b>
                        <span>Phan Gia Nhật Linh </span>
                        <span className={cx('line')}></span>
                        <b>DIỄN VIÊN:</b>
                        <span>Avin Lu,</span>
                        <span>Trần Lực,</span>
                        <span>Akari Nakatani</span>
                    </p>
                    <p className={cx('info-description')}>
                        Cuộc gặp gỡ định mệnh giữa Trịnh Công Sơn và Michiko mở
                        ra chuyến hành trình ngược về thanh xuân, khám phá mối
                        tình với các "nàng thơ" trong sáng tác của nhạc sĩ tài
                        hoa.
                    </p>
                    <div className={cx('info-actions')}>
                        {/* <Button primary>Xem ngay</Button>
                        <Button>Thêm và giỏ hàng</Button> */}
                    </div>
                </div>
            </div>
            <NavSlider />
        </div>
    );
}

export default BannerSlider;
