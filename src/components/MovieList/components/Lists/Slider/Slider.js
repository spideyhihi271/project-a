import classNames from 'classnames/bind';

import styles from './Slider.module.scss';
import Items from '../../Items';
const cx = classNames.bind(styles);
function Slider() {
    return (
        <div className={cx('movie-wrapper')}>
            <div className={cx('movie-slider')}>
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
            </div>
        </div>
    );
}

export default Slider;
