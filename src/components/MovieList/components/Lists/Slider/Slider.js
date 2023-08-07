import classNames from 'classnames/bind';

import styles from './Slider.module.scss';
const cx = classNames.bind(styles);
function Slider({ children }) {
    return (
        <div className={cx('movie-wrapper')}>
            <div className={cx('movie-slider')}>{children}</div>
        </div>
    );
}

export default Slider;
