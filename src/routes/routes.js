import config from '~/configs';
// Layout

//Page
import DetailActor from '~/pages/DetailActor';
import DetailMovie from '~/pages/DetailMovie';
import Home from '~/pages/Home';
import Movie from '~/pages/Movie';
import Packages from '~/pages/Packages';
import Payment from '~/pages/Payment';
import Playlist from '~/pages/Playlist';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Signin from '~/pages/Signin';
import TvSeries from '~/pages/TvSeries';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: null },
    { path: config.routes.movie, component: Movie, layout: null },
    { path: config.routes.series, component: TvSeries, layout: null },
    {
        path: config.routes.detailMovie + '/:id',
        component: DetailMovie,
        layout: null,
    },
    {
        path: config.routes.detailActor + '/:id',
        component: DetailActor,
        layout: null,
    },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.packages, component: Packages, layout: null },
    { path: config.routes.payment, component: Payment, layout: null },
    { path: config.routes.playlist, component: Playlist, layout: null },
    { path: config.routes.signin, component: Signin, layout: null },
    { path: config.routes.profile, component: Profile, layout: null },
];
const privateRoutes = {};

export { privateRoutes, publicRoutes };
