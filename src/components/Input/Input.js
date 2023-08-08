import React from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';
const cx = classNames.bind(styles);
function Input({ lable = '', value, setStateChange }) {
    const classes = cx('input-wrapper', {
        'input-hasValue': value.length !== 0,
    });
    return (
        <div className={classes}>
            <input
                type="text"
                className={cx('input-box')}
                value={value}
                onChange={(e) => setStateChange(e.target.value)}
            />
            <label className={cx('input-lable')}>{lable}</label>
        </div>
    );
}

export default Input;
