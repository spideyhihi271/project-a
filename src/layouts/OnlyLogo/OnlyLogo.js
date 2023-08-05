import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './OnlyLogo.module.scss';
const cx = classNames.bind(styles);
function OnlyLogo({ children }) {
    return (
        <div className={cx('layout-wrapper')}>
            <div className={cx('layout-header')}>
                <img className={cx('layout-logo')} src={images.logo} alt="" />
            </div>
            <div className={cx('layout-contents')}>{children}</div>
        </div>
    );
}

export default OnlyLogo;
