import React from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';
const cx = classNames.bind(styles);
function Input({ lable, value, onChange }) {
    console.log('I Have value', value.length);
    const classes = cx('input-wrapper', {
        'input-hasValue': value.length !== 0,
    });
    return (
        <div className={classes}>
            <input type="text" className={cx('input-box')} value={value} />
            <label className={cx('input-lable')}>Tên trên thẻ</label>
        </div>
    );
}

export default Input;
