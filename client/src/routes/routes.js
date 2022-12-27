import config from '~/config';

//Layouts
import { HeaderOnly, Main } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import ManageAccounts from '~/pages/ManageAccounts';
import AdminProductList from '~/pages/Admin/ProductList';
import HomeLayout from '~/layouts/HomeLayout';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: HomeLayout },
    { path: config.routes.login, component: Login, layout: Main },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
    { path: config.routes.manageAccounts, component: ManageAccounts, layout: HeaderOnly },
    { path: config.routes.adminProductList, component: AdminProductList, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
