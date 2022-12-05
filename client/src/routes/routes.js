import config from '~/config';

//Layouts
import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Accounts from '~/pages/Accounts';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
    { path: config.routes.accounts, component: Accounts, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
