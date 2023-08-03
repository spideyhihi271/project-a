import React from 'react';
import classNames from 'classnames/bind';
import styles from './Items.module.scss';
import Default from './Default';

const cx = classNames.bind(styles);

function Items() {
    return (
        <div className={cx('item-wrapper')}>
            <Default />
        </div>
    );
}

export default Items;
