import { useRef, useState } from 'react';
import classNames from 'classnames/bind';

// Asset
import styles from './Default.module.scss';
import images from '~/assets/images';

import { johnKeyValue } from '~/utils/arrayHelpers';
import { getTimes } from '~/utils/getTimes';
import { Link } from 'react-router-dom';
import config from '~/configs';

const cx = classNames.bind(styles);
function Default({ data }) {
    const videoRef = useRef();
    const handelMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.src = `${data.trailerUrl}?autoplay=1&mute=1&loop=1&controls=0`;
        }
    };
    const handelMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.src = '';
        }
    };
    // Render
    return (
        <div
            className={cx('default-wrapper')}
            onMouseEnter={handelMouseEnter}
            onMouseLeave={handelMouseLeave}
        >
            <div className={cx('default-container')}>
                <div className={cx('default-filter')}></div>
                <img
                    className={cx('default-brand')}
                    src={images.logoShort}
                    alt=""
                />
                <img
                    className={cx('default-thumb')}
                    src={data.thumbnailUrl}
                    alt=""
                />
                <div className={cx('default-hovering')}>
                    <div className={cx('hovering-trailer')}>
                        <iframe
                            className={cx('trailer-videos')}
                            ref={videoRef}
                            src=""
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
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
                                    <Link
                                        to={
                                            config.routes.watch + '/' + data._id
                                        }
                                        className={cx('actions-btn')}
                                    >
                                        <i className="fa-duotone fa-play"></i>
                                    </Link>
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
                                {johnKeyValue(data.genres)}
                            </p>
                        </div>
                        <div className={cx('movie-more')}>
                            <p className={cx('movie-public')}>
                                {getTimes(data.releaseDate, 1)}
                            </p>
                            <p className={cx('movie-lenght')}>
                                {data.duration} phút
                            </p>
                            <p className={cx('movie-sub')}>
                                {data.minimumAge}+
                            </p>
                            <p className={cx('movie-sub')}>HD+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Default;
