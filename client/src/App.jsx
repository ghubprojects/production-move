import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';

function App() {
    const createPages = (routes) =>
        routes.map((route, key) => {
            let Layout = DefaultLayout;
            if (route.layout) Layout = route.layout;
            else if (route.layout === null) Layout = Fragment;

            const Page = route.component;
            return (
                <Route
                    key={key}
                    path={route.path}
                    element={
                        <Layout>
                            <Page />
                        </Layout>
                    }
                />
            );
        });

    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>{createPages(publicRoutes)}</Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
