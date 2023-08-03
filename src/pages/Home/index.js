import Banner from '~/components/Banner/';
import MovieList from '~/components/MovieList';

function Home() {
    return (
        <>
            <Banner />
            <MovieList title={'Tiếp tục xem'} typeList={1} />
            <MovieList title={'Phổ biến trên Netflix'} />
            <MovieList title={'Hiện đang thịnh hành'} />
            <MovieList title={'Sắp ra mắt'} />
        </>
    );
}

export default Home;
