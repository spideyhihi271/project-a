import React from 'react';
import classNames from 'classnames/bind';
import styles from './DetailMovie.module.scss';
import images from '~/assets/images';
import video from '~/assets/videos/tearser.mp4';
import Button from '~/components/Button/Button';
import { Link } from 'react-router-dom';
import MovieList from '~/components/MovieList';

const cx = classNames.bind(styles);
function DetailMovie() {
    return (
        <div className={cx('detail-wrapper')}>
            <div className={cx('detail-trailer')}>
                <div className={cx('trailer-filter')}></div>
                <video
                    className={cx('trailer-video')}
                    src={video}
                    muted
                    autoPlay
                    loop
                ></video>
                <div className={cx('trailer-sub')}>
                    <img
                        className={cx('trailer-tag')}
                        src={images.seriesTag}
                        alt=""
                    />
                    <img
                        className={cx('trailer-name')}
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3177d583-bb50-4d9e-8aef-0ff58f4fa888/dfetto6-1ab395d2-5a3d-45db-a741-84ae9be988c3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMxNzdkNTgzLWJiNTAtNGQ5ZS04YWVmLTBmZjU4ZjRmYTg4OFwvZGZldHRvNi0xYWIzOTVkMi01YTNkLTQ1ZGItYTc0MS04NGFlOWJlOTg4YzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QmDH9bb_UFmGr4Npj1Xa8a0Ub6Y3wiCFaR94Mr20qTw"
                        alt=""
                    />
                    <div className={cx('trailer-actions')}>
                        <ul className={cx('actions-list')}>
                            <li className={cx('actions-item')}>
                                <Button
                                    primary
                                    leftIcon={
                                        <i className="fa-solid fa-play"></i>
                                    }
                                >
                                    Xem phim
                                </Button>
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
                                    <i className="fa-regular fa-volume-xmark"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('detail-main')}>
                <div className={cx('detail-movie')}>
                    <div className={cx('movie-info')}>
                        <div className={cx('info-more')}>
                            <p className={cx('info-tag')}>
                                TOP 10 phim truyền hình
                            </p>
                            <p className={cx('info-public')}>2018</p>
                            <p className={cx('info-lenght')}>6 mùa</p>
                        </div>
                        <div className={cx('info-more')}>
                            <p className={cx('info-age')}>18+</p>
                            <p className={cx('info-contents')}>
                                bạo lực, tình dục, khỏa thân, ngôn ngữ, chất gây
                                nghiện, tự sát
                            </p>
                        </div>
                        <p className={cx('info-description')}>
                            Một băng đảng khét tiếng xuất hiện ở Birmingham, Anh
                            Quốc năm 1919. Cầm đầu băng là Tommy Shelby, tên
                            trùm tội phạm khét tiếng muốn nổi lên bằng mọi giá.
                        </p>
                    </div>
                    <div className={cx('movie-more')}>
                        <ul className={cx('more-list')}>
                            <li className={cx('more-item')}>
                                <p className={cx('more-title')}>Diễn viên: </p>
                                <Link className={cx('more-values')}>
                                    Cillian Murply,
                                </Link>
                                <Link className={cx('more-values')}>
                                    Sam Neill,
                                </Link>
                                <Link className={cx('more-values')}>
                                    Helen McCrony,
                                </Link>
                                <Link className={cx('more-values')}>thêm</Link>
                            </li>
                            <li className={cx('more-item')}>
                                <p className={cx('more-title')}>Thể loại: </p>
                                <Link className={cx('more-values')}>
                                    Phim truyền hình chính kịch
                                </Link>
                                <Link className={cx('more-values')}>Anh</Link>
                                <Link className={cx('more-values')}>
                                    Thời kì lịch sử
                                </Link>
                                <Link className={cx('more-values')}>thêm</Link>
                            </li>
                            <li className={cx('more-item')}>
                                <p className={cx('more-title')}>
                                    Chương trình này:
                                </p>
                                <Link className={cx('more-values')}>
                                    Bạo lực
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <MovieList
                    props={{
                        title: 'Tập phim',
                        list: 'espison',
                        item: 'espison',
                        noPadding: true,
                    }}
                />
                <MovieList
                    props={{
                        title: 'Nội dung liên quan',
                        list: 'related',
                        item: 'default',
                        noPadding: true,
                    }}
                />
            </div>
        </div>
    );
}

export default DetailMovie;
