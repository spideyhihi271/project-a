import React from 'react';
import classNames from 'classnames/bind';
import styles from './Comments.module.scss';

const cx = classNames.bind(styles);
function Comments() {
    return (
        <div className={cx('comment-wrapper')}>
            <div className={cx('comment-container')}>
                <p className={cx('comment-title')}> Bình luận về phim </p>
                <div className={cx('comment-box')}>
                    <input
                        type="text"
                        className={cx('comment-input')}
                        placeholder="Bình luận của bạn..."
                    />
                    <button className={cx('comment-public')}>
                        <i className="fa-light fa-paper-plane"></i>
                    </button>
                </div>
                <ul className={cx('comment-list')}>
                    <li className={cx('comment-item')}>
                        <div className={cx('item-container')}>
                            <img
                                className={cx('item-avt')}
                                src="https://trumgamemod.com/wp-content/uploads/2022/09/4-FPT-Play-logo.png"
                                alt=""
                            />
                            <div className={cx('item-main')}>
                                <div className={cx('item-actions')}>
                                    <div className={cx('item-wrapper')}>
                                        <div className={cx('item-header')}>
                                            <p className={cx('item-name')}>
                                                FPT Play
                                            </p>
                                            <p className={cx('item-times')}>
                                                1 năm
                                            </p>
                                        </div>
                                        <p className={cx('item-contents')}>
                                            Ad đã up vietsub tập 1, mời các bạn
                                            cùng đón xem! Lịch chiếu: Phim được
                                            phát sóng tất cả các ngày trong tuần
                                            trên FPT PLAY.
                                        </p>
                                    </div>
                                    <ul className={cx('action-list')}>
                                        <button className={cx('action-item')}>
                                            <i className="fa-light fa-heart"></i>
                                            12
                                        </button>
                                        <button className={cx('action-item')}>
                                            <i className="fa-light fa-comment"></i>
                                        </button>
                                    </ul>
                                    <ul className={cx('sub-list')}>
                                        <li className={cx('sub-item')}>
                                            <img
                                                className={cx('sub-avt')}
                                                src="https://trumgamemod.com/wp-content/uploads/2022/09/4-FPT-Play-logo.png"
                                                alt=""
                                            />
                                            <div
                                                className={cx('sub-container')}
                                            >
                                                <div
                                                    className={cx(
                                                        'sub-wrapper',
                                                    )}
                                                >
                                                    <div
                                                        className={cx(
                                                            'sub-header',
                                                        )}
                                                    >
                                                        <p
                                                            className={cx(
                                                                'sub-name',
                                                            )}
                                                        >
                                                            Spidey
                                                        </p>
                                                        <p
                                                            className={cx(
                                                                'sub-times',
                                                            )}
                                                        >
                                                            1 năm
                                                        </p>
                                                    </div>
                                                    <p
                                                        className={cx(
                                                            'sub-content',
                                                        )}
                                                    >
                                                        Ad đã up vietsub tập 1,
                                                        mời các bạn cùng đón
                                                        xem! Lịch chiếu: Phim
                                                        được phát sóng tất cả
                                                        các ngày trong tuần trên
                                                        FPT PLAY.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={cx('comment-item')}>
                        <div className={cx('item-container')}>
                            <img
                                className={cx('item-avt')}
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                                alt=""
                            />
                            <div className={cx('item-main')}>
                                <div className={cx('item-actions')}>
                                    <div className={cx('item-wrapper')}>
                                        <div className={cx('item-header')}>
                                            <p className={cx('item-name')}>
                                                Nguyen
                                            </p>
                                            <p className={cx('item-times')}>
                                                1 năm
                                            </p>
                                        </div>
                                        <p className={cx('item-contents')}>
                                            Bala Bla Bla
                                        </p>
                                    </div>
                                    <ul className={cx('action-list')}>
                                        <button className={cx('action-item')}>
                                            <i className="fa-light fa-heart"></i>
                                            12
                                        </button>
                                        <button className={cx('action-item')}>
                                            <i className="fa-light fa-comment"></i>
                                        </button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={cx('comment-item')}>
                        <div className={cx('item-container')}>
                            <img
                                className={cx('item-avt')}
                                src="https://trumgamemod.com/wp-content/uploads/2022/09/4-FPT-Play-logo.png"
                                alt=""
                            />
                            <div className={cx('item-main')}>
                                <div className={cx('item-actions')}>
                                    <div className={cx('item-wrapper')}>
                                        <div className={cx('item-header')}>
                                            <p className={cx('item-name')}>
                                                FPT Play
                                            </p>
                                            <p className={cx('item-times')}>
                                                1 năm
                                            </p>
                                        </div>
                                        <p className={cx('item-contents')}>
                                            Ad đã up vietsub tập 1, mời các bạn
                                            cùng đón xem! Lịch chiếu: Phim được
                                            phát sóng tất cả các ngày trong tuần
                                            trên FPT PLAY.
                                        </p>
                                    </div>
                                    <ul className={cx('action-list')}>
                                        <button className={cx('action-item')}>
                                            <i className="fa-light fa-heart"></i>
                                            12
                                        </button>
                                        <button className={cx('action-item')}>
                                            <i className="fa-light fa-comment"></i>
                                        </button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Comments;
