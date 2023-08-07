import React from 'react';
import MovieList from '~/components/MovieList';
import SearchBox from '~/components/SearchBox';

function Search() {
    return (
        <>
            <SearchBox />
            <MovieList
                title={'Kết quả tìm kiếm'}
                props={{
                    title: 'Kết quả tìm kiếm cho',
                    list: 'default',
                    item: 'default',
                }}
            />
        </>
    );
}

export default Search;
