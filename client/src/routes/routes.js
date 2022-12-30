import config from '~/config';

//Layouts
import { HeaderOnly, Main } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import ManageAccounts from '~/pages/ManageAccounts';
import HomeLayout from '~/layouts/HomeLayout';
import AdminProductList from '~/pages/Admin/ProductList';
import AdminProductStatistics from '~/pages/Admin/ProductStatistics/ProductStatistics';
import DistributionProductHandling from '~/pages/DistributionAgent/ProductHandling/ProductHandling';
import DistributionProductStatistics from '~/pages/DistributionAgent/ProductStatistics/ProductStatistics';
import FactoryProductHandling from '~/pages/Factory/ProductHandling/ProductHandling';
import FactoryProductStatistics from '~/pages/Factory/ProductStatistics/ProductStatistics';
import ServiceProductHandling from '~/pages/ServiceCenter/ProductHandling/ProductHandling';
import ServiceProductStatistics from '~/pages/ServiceCenter/ProductStatistics/ProductStatistics';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: HomeLayout },
    { path: config.routes.login, component: Login, layout: Main },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
    { path: config.routes.manageAccounts, component: ManageAccounts, layout: HeaderOnly },
    { path: config.routes.adminProductList, component: AdminProductList, layout: HeaderOnly },
    {
        path: config.routes.adminProductStatistics,
        component: AdminProductStatistics,
        layout: HeaderOnly,
    },
    {
        path: config.routes.distributionProductHandling,
        component: DistributionProductHandling,
        layout: HeaderOnly,
    },
    {
        path: config.routes.distributionProductStatistics,
        component: DistributionProductStatistics,
        layout: HeaderOnly,
    },
    {
        path: config.routes.factoryProductHandling,
        component: FactoryProductHandling,
        layout: HeaderOnly,
    },
    {
        path: config.routes.factoryProductStatistics,
        component: FactoryProductStatistics,
        layout: HeaderOnly,
    },
    {
        path: config.routes.serviceProductHandling,
        component: ServiceProductHandling,
        layout: HeaderOnly,
    },
    {
        path: config.routes.serviceProductStatistics,
        component: ServiceProductStatistics,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
