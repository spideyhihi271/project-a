import React from 'react';
import Comment from '~/components/Comment/Comment';
import DetailMovieHeader from '~/components/DetailMovieHeader';
import MovieList from '~/components/MovieList';

function DetailMovie() {
    const isSeries = false;
    return (
        <>
            <DetailMovieHeader />
            {isSeries && <Comment />}
            <MovieList title={'Danh sách tập'} type />
            <MovieList title={'Nội dung liên quan'} type />
            <MovieList title={'Đề xuất thêm cho bạn'} type />
        </>
    );
}

export default DetailMovie;
