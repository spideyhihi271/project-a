import classNames from 'classnames/bind';
import React from 'react';

import styles from './BannerSlider.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
const cx = classNames.bind(styles);

function BannerSlider() {
    return <div className={cx('wrapper')}></div>;
}

export default BannerSlider;
