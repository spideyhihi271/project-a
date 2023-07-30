import React from 'react';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
const cx = classNames.bind(styles);
function CommentList() {
    return (
        <div className={cx('comment-list')}>
            <div className={cx('comment-list-item')}>
                <div className={cx('comment-item-header')}>
                    <p className={cx('name')}>Sam Bud</p>
                    <i class="fa-solid fa-circle"></i>
                    <p className={cx('public')}>1 tháng</p>
                </div>
                <p className={cx('comment-item-content')}>
                    Phim hay, sếp trộm dàn cảnh đủ đầy & chi tiết :)
                </p>
            </div>
            <div className={cx('comment-list-item')}>
                <div className={cx('comment-item-header')}>
                    <p className={cx('name')}>Sam Bud</p>
                    <i class="fa-solid fa-circle"></i>
                    <p className={cx('public')}>1 tháng</p>
                </div>
                <p className={cx('comment-item-content')}>
                    Phim hay, sếp trộm dàn cảnh đủ đầy & chi tiết :)
                </p>
            </div>
        </div>
    );
}

export default CommentList;
