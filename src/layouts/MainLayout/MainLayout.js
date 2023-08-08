import classNames from 'classnames/bind';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './MainLayout.module.scss';

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
