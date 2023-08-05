import React from 'react';
import Banner from '~/components/Banner';
import Comments from '~/components/Comments';
import DetailMovie from '~/components/DetailMovie';
import MovieList from '~/components/MovieList';

function Detail() {
    return (
        <>
            <Banner />
            <DetailMovie />
            <MovieList title={'Tiếp tục xem'} typeList={1} />
            <Comments />
        </>
    );
}

export default Detail;
