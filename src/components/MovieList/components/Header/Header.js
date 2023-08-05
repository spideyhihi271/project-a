import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function Header({ title, description, link }) {
    return (
        <div className={cx('header-wrapper')}>
            <div className={cx('header-main')}>
                <h2 className={cx('main-title')}>
                    {title}
                    <span className={cx('main-total')}> | 4 phim </span>
                </h2>
                <p className={cx('main-description')}>{description}</p>
            </div>
            <div className="header-side">
                <div className={cx('side-actions')}>
                    <ul className={cx('actions-list')}>
                        <li className={cx('actions-item')}>
                            <Button onlyIcon>
                                <i className="fa-solid fa-angle-left"></i>
                            </Button>
                        </li>
                        <li className={cx('actions-item')}>
                            <Button onlyIcon>
                                <i className="fa-solid fa-angle-right"></i>
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
