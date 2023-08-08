import React from 'react';
import classNames from 'classnames/bind';
import styles from './Epison.module.scss';

const cx = classNames.bind(styles);
function Epison({ data }) {
    return (
        <div className={cx('espison-wrapper')}>
            <p className={cx('espison-order')}>1</p>
            <img
                className={cx('espison-thumb')}
                src="https://cdn.images.express.co.uk/img/dynamic/20/590x/Peaky-Blinders-real-story-Cillian-Murphy-name-true-1262727.jpg?r=1586331159945"
                alt=""
            />
            <div className={cx('espison-container')}>
                <header className={cx('espison-header')}>
                    <p className={cx('espison-order-h')}>Tập 1</p>
                    <p className={cx('espison-lenght')}>57p</p>
                </header>
                <p className={cx('espison-content')}>
                    Thủ lĩnh băng nhóm xã hội đen giàu tham vọng Thomas Shelby
                    nhìn thấy cơ hội tiến thân nhờ một thùng súng mất tích.
                </p>
            </div>
        </div>
    );
}

export default Epison;
