import React from 'react';
import classNames from 'classnames/bind';

import styles from './MovieList.module.scss';
import { Link } from 'react-router-dom';
import config from '~/configs';
const cx = classNames.bind(styles);
function MovieItem({ data, continueItem }) {
    return (
        <Link
            to={`${config.routes.detailMovie}/1232`}
            className={cx('movie-item', { continueItem })}
        >
            <img className={cx('movie-item-bg')} src={data.bg} alt="" />
            <div className={cx('movie-item-tag')}>#1 Trending</div>
            <div className={cx('movie-item-info')}>
                <button className={cx('info-play-btn')}>
                    <i className={cx('fa-duotone fa-play')}></i>
                </button>
                <div className={cx('info-movie')}>
                    <p className={cx('info-movie-name')}>Em và Trịnh</p>
                    <div className={cx('info-movie-public')}>
                        Hành động / Phiêu lưu
                    </div>
                </div>
                {continueItem ? (
                    <div className={cx('info-movie-timer')}>02:28:06</div>
                ) : (
                    <div className={cx('info-movie-vote')}>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <span>4.8</span>
                    </div>
                )}
            </div>
        </Link>
    );
}

export default MovieItem;
