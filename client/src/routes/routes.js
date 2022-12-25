import config from '~/config';

//Layouts
import { HeaderOnly, Main } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import ManageAccounts from '~/pages/ManageAccounts';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login, layout: Main },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
    { path: config.routes.manageAccounts, component: ManageAccounts, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
