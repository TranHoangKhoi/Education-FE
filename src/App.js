// import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardLayout, DefaultLayout } from '~/layouts';
import Notification from './pages/Notification';
import Attendance from './pages/Attendance';
import HistoryStudent from './pages/HistoryStudent';
import Transcript from './pages/Transcript';
import GradeBookByTerm from './pages/GradeBookByTerm';
import Lecturers from './pages/Lecturers';
// import Student from './pages/Student';
function App()
{
    return (
        <Router>
            <Routes>
                {/* <Route>
                    {privateRoute.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
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
                </Route> */}
                <Route path="/" element={<DashboardLayout />} />
                <Route path="/student" element={<DefaultLayout />}>
                    <Route path="" element={<Notification />} />
                    <Route path="attendance" element={<Attendance />} />
                    <Route path="historyStudent" element={<HistoryStudent />} />
                    <Route path="transcript" element={<Transcript />} />
                    <Route path="gradebookbyterm" element={<GradeBookByTerm />} />
                    <Route path="lecturers" element={<Lecturers />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
