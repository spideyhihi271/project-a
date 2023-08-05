import classNames from 'classnames/bind';

import styles from './MovieList.module.scss';
import Header from './components/Header';
import Lists from './components/Lists';

const cx = classNames.bind(styles);
function MovieList({ title, link, typeList, typeItem }) {
    return (
        <div className={cx('list-wrapper')}>
            <Header title={title} />
            <Lists type={typeList} />
        </div>
    );
}

export default MovieList;
