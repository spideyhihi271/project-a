import classNames from 'classnames/bind';

import styles from './DetailMovie.module.scss';
const cx = classNames.bind(styles);

function DetailMovieHeader() {
    return (
        <div className={cx('detail')}>
            <div className={cx('detail-bg')}>
                <img
                    className={cx('detail-bg-img')}
                    src="https://we25.vn/media2018/Img_News/2022/06/15/t5_copy_20220615172207.png"
                    alt=""
                />
                <button className={cx('detail-bg-btn')}>
                    <i className="fa-duotone fa-play"></i>
                </button>
            </div>
            <div className={cx('detail-info')}>
                <div className={cx('detail-info-side')}>
                    <img
                        className={cx('info-side-avt')}
                        src="https://cdn.galaxycine.vn/media/2022/6/17/300x450_1655470357035.jpg"
                        alt=""
                    />
                </div>
                <div className={cx('detail-info-main')}>
                    <div className={cx('info-movie')}>
                        <p className={cx('info-movie-name')}>Em và Trịnh</p>
                        <div className={cx('info-movie-more')}>
                            <p className={'lenght'}>112 phút</p>
                            <div className={cx('genders')}>
                                <p>Phim Việt, </p>
                                <p>Lãng mạn, </p>
                                <p>Tâm lý</p>
                            </div>
                            <button className={cx('action')}>
                                <i className="fa-regular fa-arrow-up-right-from-square"></i>
                                Chia sẻ
                            </button>
                            <button className={cx('action')}>
                                <i className="fa-light fa-heart"></i>
                                Thêm vào yêu thích
                            </button>
                        </div>
                        <p className={cx('info-movie-description')}>
                            Cuộc gặp gỡ định mệnh giữa Trịnh Công Sơn và Michiko
                            mở ra chuyến hành trình ngược về thanh xuân, khám
                            phá mối tình với các "nàng thơ" trong sáng tác của
                            nhạc sĩ tài hoa.
                        </p>
                    </div>
                    <div className={cx('info-sides')}>
                        <div className={cx('info-sides-item')}>
                            <span>Diễn viên: </span>
                            Avin Lu, Trần Lực, Akari Nakatani
                        </div>
                        <div className={cx('info-sides-item')}>
                            <span>Đạo diễn: </span>
                            Phan Gia Nhật Linh
                        </div>
                        <div className={cx('info-sides-item')}>
                            <span>Biên kịch: </span>
                            Shay Hatten, Micheal Finch, Derek Kolstad
                        </div>
                        <div className={cx('info-sides-item')}>
                            <span>Năm phát hành: </span>
                            2022
                        </div>
                        <div className={cx('info-sides-item')}>
                            <span>Công ti phát hành: </span>
                            Giải trí 87, ElevenLionsgate, Studio Babelsberg
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailMovieHeader;
