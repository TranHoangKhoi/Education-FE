import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoute } from '~/Route';
import { DefaultLayout } from '~/components/layouts';
function App() {
    return (
        <Router>
            <Routes>
                {privateRoute.map((route, index) => {
                    const Layout = route.layout || DefaultLayout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
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
        </Router>
    );
}

export default App;
