import classNames from 'classnames/bind';

import styles from './Default.module.scss';
import images from '~/assets/images';
import video from '~/assets/videos/tearser.mp4';
import Button from '~/components/Button/Button';
const cx = classNames.bind(styles);
function Default() {
    return (
        <div className={cx('default-wrapper')}>
            <div className={cx('default-container')}>
                <div className={cx('default-filter')}></div>
                <img
                    className={cx('default-brand')}
                    src={images.logoShort}
                    alt=""
                />
                <img
                    className={cx('default-thumb')}
                    src="https://cdn.tuoitre.vn/thumb_w/1060/471584752817336320/2023/6/5/02-1685933870454878648234.jpg"
                    alt=""
                />
                <div className={cx('default-hovering')}>
                    <div className={cx('hovering-trailer')}>
                        <video
                            className={cx('trailer-videos')}
                            src={video}
                            muted
                            autoPlay
                            loop
                        ></video>
                        <div className={cx('trailer-sub')}>
                            <img
                                className={cx('trailer-tag')}
                                src={images.movieTag}
                                alt=""
                            />
                            <img
                                className={cx('trailer-name')}
                                src="https://www.pngplay.com/wp-content/uploads/13/Squid-Game-Logo-PNG-HD-Quality.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={cx('hovering-movie')}>
                        <div className={cx('movie-actions')}>
                            <ul className={cx('actions-list')}>
                                <li className={cx('actions-item')}>
                                    <button className={cx('actions-btn')}>
                                        <i className="fa-duotone fa-play"></i>
                                    </button>
                                </li>
                                <li className={cx('actions-item')}>
                                    <button className={cx('actions-btn')}>
                                        <i className="fa-regular fa-plus"></i>
                                    </button>
                                </li>
                                <li className={cx('actions-item')}>
                                    <button className={cx('actions-btn')}>
                                        <i className="fa-light fa-heart"></i>
                                    </button>
                                </li>
                                <li className={cx('actions-item')}>
                                    <button className={cx('actions-btn')}>
                                        <i className="fa-thin fa-info"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('movie-more')}>
                            <p className={cx('movie-tag')}>TOP 10</p>
                            <p className={cx('movie-gender')}>
                                Hành động, Giật gân
                            </p>
                        </div>
                        <div className={cx('movie-more')}>
                            <p className={cx('movie-public')}>2017</p>
                            <p className={cx('movie-lenght')}>120 mins</p>
                            <p className={cx('movie-sub')}>18+</p>
                            <p className={cx('movie-sub')}>HD+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Default;
