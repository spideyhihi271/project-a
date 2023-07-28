import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/configs';
import Notify from '~/components/Notify';
import Popper from '~/components/Popper';
import Menu from '~/components/Popper/Menu/';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header-container')}>
                <div className={cx('header-logo-nav')}>
                    <Link to={'/'} className={cx('logo')}>
                        <img
                            src="https://www.nicepng.com/png/full/223-2235489_want-logo-hbo-white.png"
                            alt=""
                        />
                    </Link>
                    <nav className={cx('navbar')}>
                        <ul className={cx('nav-list')}>
                            <Link to={'/'} className={cx('nav-list-item')}>
                                Trang chủ
                            </Link>
                            <Link to={'/'} className={cx('nav-list-item')}>
                                Phim điện ảnh
                            </Link>
                            <Link to={'/2'} className={cx('nav-list-item')}>
                                Phim bộ
                            </Link>
                            <Link
                                to={config.routes.packages}
                                className={cx('nav-list-item')}
                            >
                                Gói dịch vụ
                            </Link>
                            <Link to={'/4'} className={cx('nav-list-item')}>
                                Phim đã thêm
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className={cx('actions')}>
                    <ul className={cx('actions-list')}>
                        <Link
                            to={config.routes.search}
                            className={cx('actions-item')}
                        >
                            <i className="fa-thin fa-magnifying-glass"></i>
                        </Link>
                        <Popper show={<Notify />}>
                            <button className={cx('actions-item')}>
                                <i className="fa-thin fa-bell"></i>
                            </button>
                        </Popper>
                        <Popper>
                            <button className={cx('actions-item')}>
                                <i className="fa-thin fa-grid-2"></i>
                            </button>
                        </Popper>
                        <Popper show={<Menu />}>
                            <img
                                src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
                                alt=""
                                className={cx('logger-lable')}
                            />
                        </Popper>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
