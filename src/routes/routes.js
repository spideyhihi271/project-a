import { Fragment } from 'react';
import config from '~/configs';
// Layout
import OnlyLogo from '~/layouts';

//Page
import Detail from '~/pages/Detail';
import Home from '~/pages/Home';
import Movies from '~/pages/Movies';
import Packages from '~/pages/Packages';
import Payment from '~/pages/Payment';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Series from '~/pages/Series';
import Signin from '~/pages/Signin';
import Watch from '~/pages/Watch';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.movies,
        component: Movies,
    },
    {
        path: config.routes.series,
        component: Series,
    },
    {
        path: config.routes.detail + '/:id',
        component: Detail,
    },
    {
        path: config.routes.watch + '/:id',
        component: Watch,
        layout: Fragment,
    },
    {
        path: config.routes.search,
        component: Search,
    },
    {
        path: config.routes.package,
        component: Packages,
    },
    {
        path: config.routes.payment,
        component: Payment,
    },
    {
        path: config.routes.signin,
        component: Signin,
        layout: OnlyLogo,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
];
const privateRoutes = {};

export { privateRoutes, publicRoutes };
