import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

// Asset
import video from '~/assets/videos/tearser.mp4';
import styles from './WatchBox.module.scss';
// Component
import * as MovieServices from '~/services/movieServices';
import Pause from './components/Pause';
import Navigator from './components/Navigator';

const cx = classNames.bind(styles);
function WatchBox() {
    const { idMovie } = useParams();
    const [data, setData] = useState({});
    const [pause, setPause] = useState(true);
    // Get Data
    useEffect(() => {
        const getData = async () => {
            const result = await MovieServices.get('/' + idMovie);
            console.log(result);
            setData(result);
            const timerId = setTimeout(() => {
                setPause(false);
            }, 3000);

            // Clear the timeout only when the component unmounts
            return () => {
                clearTimeout(timerId);
            };
        };
        getData();
    }, []);

    return (
        <div className={cx('watch-wrapper')}>
            <iframe
                className={cx('watch-content')}
                src={`${data.trailerUrl}?autoplay=1&mute=1&loop=1&controls=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            {pause && <Pause data={data} />}
        </div>
    );
}

export default WatchBox;
