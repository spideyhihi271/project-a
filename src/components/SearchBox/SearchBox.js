import React from 'react';
import classNames from 'classnames/bind';

import styles from './SearchBox.module.scss';
import Popper from '../Popper/Popper';

const cx = classNames.bind(styles);
function SearchBox() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input
                    className={cx('search-input')}
                    placeholder="Nhập tên phim, sự kiện hoặc nội dung..."
                ></input>
                <div className={cx('search-status')}>
                    <button>
                        <i className="fa-duotone fa-circle-xmark"></i>
                    </button>
                    <i class="fa-light fa-circle-notch fa-spin"></i>
                </div>
                <button className={cx('search-btn')}>Tìm kiếm</button>
            </div>
            {/* sau này check nếu có value thì hiện */}
            {/* <div className={cx('recommend-keywords')}>
                <button className={cx('recommend-keywords-item')}>
                    <i class="fa-light fa-magnifying-glass"></i>
                    Anna conda
                </button>
                <button className={cx('recommend-keywords-item')}>
                    <i class="fa-light fa-magnifying-glass"></i>
                    Anna conda
                </button>
                <button className={cx('recommend-keywords-item')}>
                    <i class="fa-light fa-magnifying-glass"></i>
                    Anna conda
                </button>
                <button className={cx('recommend-keywords-item')}>
                    <i class="fa-light fa-magnifying-glass"></i>
                    Anna conda
                </button>
            </div> */}
        </div>
    );
}

export default SearchBox;
