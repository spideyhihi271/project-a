import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
    return <div className={cx('footer-wrapper')}>Footer</div>;
}

export default Footer;
