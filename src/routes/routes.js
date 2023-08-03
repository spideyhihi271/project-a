import config from '~/configs';
// Layout

//Page
import Home from '~/pages/Home';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
];
const privateRoutes = {};

export { privateRoutes, publicRoutes };
