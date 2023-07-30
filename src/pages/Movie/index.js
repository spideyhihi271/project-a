import React from 'react';
import BannerSlider from '~/components/BannerSlider';
import MovieList from '~/components/MovieList/MovieList';

function Movie() {
    return (
        <>
            <BannerSlider />
            <MovieList title={'Tiếp tục xem'} type />
            <MovieList title={'Phim Việt Chiếu Rạp Hay Nhất Trên Beecine'} />
            <MovieList title={'Phim Điện Ảnh Châu Á Hay Nhất'} />
            <MovieList title={'Hành Động Hollywood'} />
            <MovieList title={'Tâm Lý Hollywood'} />
            <MovieList title={'Kinh Dị Hollywood'} />
            <MovieList title={'Tiếp tục xem'} />
        </>
    );
}

export default Movie;
