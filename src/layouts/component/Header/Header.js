import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Popper from '~/components/Popper';
import styles from './Header.module.scss';
import Notify from '~/components/Notify';
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
                            <Link to={'/1'} className={cx('nav-list-item')}>
                                Phim điện ảnh
                            </Link>
                            <Link to={'/2'} className={cx('nav-list-item')}>
                                Phim bộ
                            </Link>
                            <Link to={'/4'} className={cx('nav-list-item')}>
                                Gói dịch vụ
                            </Link>
                            <Link to={'/5'} className={cx('nav-list-item')}>
                                Nhiều hơn
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className={cx('actions')}>
                    <ul className={cx('actions-list')}>
                        <Popper>
                            <button className={cx('actions-item')}>
                                <i className="fa-thin fa-magnifying-glass"></i>
                            </button>
                        </Popper>
                        <Popper show={<Notify />}>
                            <button className={cx('actions-item')}>
                                <i className="fa-thin fa-bell"></i>
                            </button>
                        </Popper>
                        <Popper>
                            <button className={cx('actions-item')}>
                                <i className="fa-thin fa-circle"></i>
                            </button>
                        </Popper>
                        <Popper>
                            <img
                                src="https://vcdn-suckhoe.vnecdn.net/2017/03/31/hinh1-5821-1490926721.jpg"
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
