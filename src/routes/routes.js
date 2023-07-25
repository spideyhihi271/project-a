import config from '~/configs';
// Layout
//Page
import Home from '~/pages/Home';
import DetailActor from '~/pages/DetailActor';
import DetailMovie from '~/pages/DetailMovie';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.detailMovie, component: DetailMovie },
    { path: config.routes.detailActor, component: DetailActor },
    { path: config.routes.search, component: Search },
];
const privateRoutes = {};

export { publicRoutes, privateRoutes };
