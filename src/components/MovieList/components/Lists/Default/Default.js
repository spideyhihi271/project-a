import classNames from 'classnames/bind';

import styles from './Default.module.scss';
const cx = classNames.bind(styles);
function Default({ children }) {
    return <div className={cx('default-wrapper')}>{children}</div>;
}

export default Default;
