import React from 'react';
import classNames from 'classnames/bind';

import styles from './BannerSlider.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function NavSlider() {
    return (
        <div className={cx('nav-slider')}>
            <header className={cx('nav-slider-header')}>
                <p className={cx('nav-header-title')}>PHIM MỚI NỔI BẬT</p>
                <div className={cx('nav-header-actions')}>
                    <button>
                        <i class="fa-regular fa-chevron-left"></i>
                    </button>
                    <button>
                        <i class="fa-regular fa-chevron-right"></i>
                    </button>
                </div>
            </header>
            <main className={cx('nav-slider-list')}>
                <Link to={''} className={cx('nav-slider-item')}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyMEBIn0jfgAzaoXcs5v_6pLZnTeJcR4uPw&usqp=CAU"
                        alt=""
                    />
                    <p>Em và Trịnh</p>
                </Link>
                <Link to={''} className={cx('nav-slider-item')}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyMEBIn0jfgAzaoXcs5v_6pLZnTeJcR4uPw&usqp=CAU"
                        alt=""
                    />
                    <p>Em và Trịnh</p>
                </Link>
                <Link to={''} className={cx('nav-slider-item')}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyMEBIn0jfgAzaoXcs5v_6pLZnTeJcR4uPw&usqp=CAU"
                        alt=""
                    />
                    <p>Em và Trịnh</p>
                </Link>
                <Link to={''} className={cx('nav-slider-item')}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyMEBIn0jfgAzaoXcs5v_6pLZnTeJcR4uPw&usqp=CAU"
                        alt=""
                    />
                    <p>Em và Trịnh</p>
                </Link>
                <Link to={''} className={cx('nav-slider-item')}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyMEBIn0jfgAzaoXcs5v_6pLZnTeJcR4uPw&usqp=CAU"
                        alt=""
                    />
                    <p>Em và Trịnh</p>
                </Link>
                <Link to={''} className={cx('nav-slider-item')}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyMEBIn0jfgAzaoXcs5v_6pLZnTeJcR4uPw&usqp=CAU"
                        alt=""
                    />
                    <p>Em và Trịnh</p>
                </Link>
            </main>
        </div>
    );
}

export default NavSlider;
