import classNames from 'classnames/bind';

import styles from './MovieList.module.scss';
import Header from './components/Header';
import { DefaultList, EspisonList, SliderList } from './components/Lists';
import { DefaultItem, EspisonItem, TrendingItem } from './components/Items';

const cx = classNames.bind(styles);
function MovieList({ props }) {
    // Distructuring Props
    const {
        title, // use for Header
        description, // use for Header
        list, // use check typelist
        item, // use check item
        ...passProps
    } = props;

    // Check List type
    let List = DefaultList;
    if (list.includes('slider')) List = SliderList;
    else if (list.includes('espison')) List = EspisonList;

    // Check Item type
    let Item = DefaultItem;
    if (item.includes('trending')) Item = TrendingItem;
    else if (item.includes('espison')) Item = EspisonItem;

    return (
        <div className={cx('list-wrapper')}>
            <Header props={{ title, description, list, ...passProps }} />
            <List>
                <Item />
            </List>
        </div>
    );
}

export default MovieList;
