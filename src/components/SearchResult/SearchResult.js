import React from 'react';
import classNames from 'classnames/bind';

import styles from './SearchResult.module.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import MovieItem from '../MovieList/MovieItem';
const cx = classNames.bind(styles);
function SearchResult({ title, data, isTag }) {
    return (
        <div className={cx('search-result')}>
            <p className={cx('search-result-title')}>{title} :</p>
            <ul className={cx('result-list')}>
                {data.map((item, idx) =>
                    isTag ? (
                        <button className={cx('result-list-item')} key={idx}>
                            {item.tagName}
                        </button>
                    ) : (
                        <MovieItem data={item} />
                    ),
                )}
            </ul>
        </div>
    );
}

export default SearchResult;
