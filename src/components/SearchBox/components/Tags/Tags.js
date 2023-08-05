import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tags.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Tags() {
    return (
        <div className={cx('tags-wrapper')}>
            <ul className={cx('tags-list')}>
                <li className={cx('tags-item')}>
                    <p className={cx('tags-title')}>Từ khóa liên quan: </p>
                </li>
                <li className={cx('tags-item')}>
                    <Link className={cx('tags-link')}>Bóng ma Anh quốc</Link>
                </li>
                <li className={cx('tags-item')}>
                    <Link className={cx('tags-link')}>Lưỡi gươm diệt quỷ</Link>
                </li>
                <li className={cx('tags-item')}>
                    <Link className={cx('tags-link')}>Lưỡi gươm diệt quỷ</Link>
                </li>
                <li className={cx('tags-item')}>
                    <Link className={cx('tags-link')}>Lưỡi gươm diệt quỷ</Link>
                </li>
                <li className={cx('tags-item')}>
                    <Link className={cx('tags-link')}>Lưỡi gươm diệt quỷ</Link>
                </li>
                <li className={cx('tags-item')}>
                    <Link className={cx('tags-link')}>Lưỡi gươm diệt quỷ</Link>
                </li>
            </ul>
        </div>
    );
}

export default Tags;
