import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { MainLayout } from './layouts';
import { publicRoutes } from './routes';
import { useEffect } from 'react';

function App() {
    // Google
    const handelCallbackRes = (res) => {
        console.log('Encode JWT ID token: ' + res.credential);
    };
    useEffect(() => {
        const google = window.google;
        console.log('Google Object: ', google);
        // Khởi tạo API Đăng nhập Google
        google.accounts.id.initialize({
            client_id:
                '133916044023-6li9fpfm5b079ara3lbtv5qv10es6euo.apps.googleusercontent.com',
            callback: handelCallbackRes,
        });

        // Chờ khởi tạo trước khi hiển thị nút Đăng nhập Google
        const renderGoogleButton = () => {
            google.accounts.id.renderButton(
                document.getElementById('login-with-gg'),
                {
                    theme: 'outline',
                    size: 'large',
                },
            );
        };

        // Gọi hàm để hiển thị nút Đăng nhập Google
        renderGoogleButton();

        // Hiển thị hộp chọn user
        google.accounts.id.prompt();
    }, []);
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
