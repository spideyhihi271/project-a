import classNames from 'classnames/bind';

import Header from '../component/Header/';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);
function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default MainLayout;
