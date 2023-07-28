import classNames from 'classnames/bind';
import React from 'react';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);
function Input({ lable, description, placeholder, flex }) {
    const classes = cx('input', { flex });
    return (
        <div className={classes}>
            <div className={cx('input-info')}>
                <label htmlFor="" className={cx('input-info-lable')}>
                    {lable}
                </label>
                <p className={cx('input-info-description')}>{description}</p>
            </div>
            <input
                type="text"
                className={cx('input-box')}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;
