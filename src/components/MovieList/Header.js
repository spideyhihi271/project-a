import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './MovieList.module.scss';

const cx = classNames.bind(styles);
function Header({ title, number, link, onNext, onPrev }) {
    return (
        <header className={cx('movies-header')}>
            <div className={cx('header-title')}>
                <p className={cx('header-title-content')}>{title}</p>
                <p className={cx('header-title-movie')}>| 4 phim</p>
            </div>
            <div className={cx('header-aside')}>
                <Link to={link} className={cx('header-link')}>
                    Xem tất cả
                </Link>
                <div className={cx('header-actions')}>
                    <button
                        onClick={onPrev}
                        className={cx('header-actions-item')}
                    >
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button
                        onClick={onNext}
                        className={cx('header-actions-item')}
                    >
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
