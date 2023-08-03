import React from 'react';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

const cx = classNames.bind(styles);
function MainLayout({ children }) {
    return (
        <div className={cx('layout')}>
            <Header />
            <div className={cx('layout-content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default MainLayout;
