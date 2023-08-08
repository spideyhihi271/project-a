import classNames from 'classnames/bind';

import styles from './Related.module.scss';
const cx = classNames.bind(styles);
function Related({ children }) {
    return <div className={cx('related-wrapper')}>{children}</div>;
}

export default Related;
