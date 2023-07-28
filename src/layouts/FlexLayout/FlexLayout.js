import React from 'react';
import classNames from 'classnames/bind';

import styles from './FlexLayout.module.scss';

const cx = classNames.bind(styles);
function FlexLayout({ aside, children, reverse }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('flex-layout')}>
                <div
                    style={reverse && { order: 2 }}
                    className={cx('flex-layout-aside')}
                >
                    {aside}
                </div>
                <div
                    style={reverse && { order: 1 }}
                    className={cx('flex-layout-main')}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default FlexLayout;
