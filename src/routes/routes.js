import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
