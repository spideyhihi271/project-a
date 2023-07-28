import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function Menu() {
    return (
        <div className={cx('menu')}>
            <Button text>Tài khoản của tôi</Button>
            <Button text>Gói dịch vụ của tôi</Button>
            <Button text>Hỗ trợ</Button>
            <Button text>Cài đặt</Button>
            <Button text>Đăng xuất</Button>
        </div>
    );
}

export default Menu;
