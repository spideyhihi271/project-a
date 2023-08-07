import React from 'react';
import classNames from 'classnames/bind';
import styles from './Espison.module.scss';

const cx = classNames.bind(styles);
function Espison({ children }) {
    return <div className={cx('espisons-wrapper')}>{children}</div>;
}

export default Espison;
