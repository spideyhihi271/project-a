import React from 'react';
import classNames from 'classnames/bind';

import styles from './Default.module.scss';
import Items from '../../Items/Items';
const cx = classNames.bind(styles);
function Default() {
    return (
        <div className={cx('default-wrapper')}>
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
        </div>
    );
}

export default Default;
