import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBox.module.scss';
import Header from './components/Header';
import Tags from './components/Tags';

const cx = classNames.bind(styles);
function SearchBox() {
    return (
        <div className={cx('search-wrapper')}>
            <Header />
            <Tags />
        </div>
    );
}

export default SearchBox;
