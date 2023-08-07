import Banner from '~/components/Banner/';
import MovieList from '~/components/MovieList';

function Home() {
    return (
        <>
            <Banner />
            <MovieList
                title={'Phim hay tháng 8'}
                props={{
                    title: 'Phim hay tháng 8',
                    list: 'default',
                    item: 'default',
                }}
            />
        </>
    );
}

export default Home;
