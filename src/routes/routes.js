import config from '~/configs';
// Layout
//Page
import Home from '~/pages/Home';
import DetailActor from '~/pages/DetailActor';
import DetailMovie from '~/pages/DetailMovie';
import Search from '~/pages/Search';
import Packages from '~/pages/Packages';
import Payment from '~/pages/Payment';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.detailMovie + '/:id', component: DetailMovie },
    { path: config.routes.detailActor + '/:id', component: DetailActor },
    { path: config.routes.search, component: Search },
    { path: config.routes.packages, component: Packages },
    { path: config.routes.payment, component: Payment },
];
const privateRoutes = {};

export { publicRoutes, privateRoutes };
