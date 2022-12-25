import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    {publicRoutes.map((route, key) => {
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
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;