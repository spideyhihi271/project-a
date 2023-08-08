import Banner from '~/components/Banner/';
import MovieList from '~/components/MovieList';

function Home() {
    return (
        <>
            <Banner />
            <MovieList
                props={{
                    title: 'Phổ biến trên Netflix',
                    list: 'slider',
                    item: 'default',
                }}
            />
            <MovieList
                props={{
                    title: 'Danh sách tiếp tục xem',
                    list: 'default',
                    item: 'default',
                }}
            />
            <MovieList
                props={{
                    title: 'Hiện đang thịnh hành',
                    list: 'default',
                    item: 'default',
                }}
            />
            <MovieList
                props={{
                    title: 'Phim hành động mãn nhãn',
                    list: 'default',
                    item: 'default',
                }}
            />
            <MovieList
                props={{
                    title: 'Phim tình cảm Hàn Quốc',
                    list: 'default',
                    item: 'default',
                }}
            />
            <MovieList
                props={{
                    title: 'Top 10 phim điện ảnh Việt Nam hôm nay',
                    list: 'default',
                    item: 'default',
                }}
            />
            <MovieList
                props={{
                    title: 'Phim truyền hình Việt Nam',
                    list: 'default',
                    item: 'default',
                }}
            />
            <MovieList
                props={{
                    title: 'Hoạt hình',
                    list: 'default',
                    item: 'default',
                }}
            />
        </>
    );
}

export default Home;
