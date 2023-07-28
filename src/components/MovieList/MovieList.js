import classNames from 'classnames/bind';
import styles from './MovieList.module.scss';

import Header from './Header';
import MovieItem from './MovieItem';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function MovieList({ type, title, link }) {
    const [data, setData] = useState([
        {
            bg: 'https://cdn.tuoitre.vn/thumb_w/1060/471584752817336320/2023/6/5/02-1685933870454878648234.jpg',
        },
        {
            bg: 'https://i-ngoisao.vnecdn.net/2022/12/29/em-va-trinh-9233-1672307425.jpg',
        },
        {
            bg: 'https://tuyengiao.vn/Uploads/2016/1/6/260.jpg',
        },
        {
            bg: 'https://media.vneconomy.vn/w800/images/upload/2023/03/13/chi-chi-em-em3.jpg',
        },
        {
            bg: 'https://bvhttdl.mediacdn.vn/291773308735864832/2021/11/30/phim1-1638237840924-1638237841320473590674.jpg',
        },
        {
            bg: 'https://gamek.mediacdn.vn/zoom/600_315/2019/8/12/avata-156558052816668086072.jpg',
        },
        {
            bg: 'https://simg.zalopay.com.vn/zlp-website/assets/phim_hollywood_Series_Biet_Doi_Sieu_Anh_Hung_The_Avengers_2012_2019_4f7c9a8135.jpg',
        },
    ]);
    const [animation, setAnimation] = useState({});
    const handelNext = () => {
        let newData = [...data];
        newData = newData.concat(newData.slice(0, 4));
        newData = newData.slice(4);
        setData(newData);
        setAnimation('next');
    };
    const handlePrev = () => {
        let newData = [...data];
        newData = newData.slice(-4).concat(newData);
        newData = newData.slice(0, -4);
        setData(newData);
        setAnimation('prev');
    };
    // Clear times
    useEffect(() => {
        const timmerId = setTimeout(() => {
            setAnimation('');
        }, 1000);
        return () => {
            clearTimeout(timmerId);
        };
    }, [animation]);

    return (
        <div className={cx('movies')}>
            <Header
                title={title}
                link={link}
                onNext={handelNext}
                onPrev={handlePrev}
            />
            <div className={cx('movies-list')}>
                <div className={cx('movies-slider', animation)}>
                    {data.map((item, idx) => (
                        <MovieItem data={item} continueItem={type} key={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieList;
