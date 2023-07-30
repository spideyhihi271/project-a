import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { MainLayout } from './layouts';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, idx) => {
                        // Check Page
                        const Page = route.component;
                        // Check layout
                        let Layout = MainLayout;
                        if (route.layout) Layout = route.layout;
                        // Logic here
                        return (
                            <Route
                                key={idx}
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
        </Router>
    );
}

export default App;
