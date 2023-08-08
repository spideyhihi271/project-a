import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import * as MovieServices from '~/services/movieServices';

// Styles
import styles from './MovieList.module.scss';

// Children Component
import Header from './components/Header';
import {
    DefaultList,
    EspisonList,
    RelatedList,
    SliderList,
} from './components/Lists';
import { DefaultItem, EspisonItem, TrendingItem } from './components/Items';

const cx = classNames.bind(styles);
function MovieList({ props }) {
    // Distructuring Props
    const {
        title, // use for Header
        description, // use for Header
        list, // use check typelist
        item, // use check item
        noPadding = false,
        ...passProps
    } = props;

    // All state
    const [data, setData] = useState([]);
    const [maxItem, setMaxItem] = useState(0);
    const [loading, setLoading] = useState([]);

    // Get Data
    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const result = await MovieServices.get();
            setData(result);
            setLoading(false);
        };
        getData();
    }, []);

    // Check Layout
    let List = DefaultList;
    let Item = DefaultItem;
    if (list.includes('slider')) List = SliderList;
    else if (list.includes('espison')) List = EspisonList;
    else if (list.includes('related')) List = RelatedList;
    if (item.includes('trending')) Item = TrendingItem;
    else if (item.includes('espison')) Item = EspisonItem;

    return (
        <div className={cx('list-wrapper', { 'list-noPadding': noPadding })}>
            <Header props={{ title, description, list, ...passProps }} />
            <List>
                {data.map((movie) => (
                    <Item data={movie} key={movie._id} />
                ))}
            </List>
        </div>
    );
}

export default MovieList;
