// import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardLayout, DefaultLayout } from '~/layouts';
import Notification from './pages/Notification';
import Attendance from './pages/Attendance';
import HistoryStudent from './pages/HistoryStudent';
import Transcript from './pages/Transcript';
import GradeBookByTerm from './pages/GradeBookByTerm';
import ViewScoreboard from './pages/ViewScoreboard';
import ProfilePersonal from './pages/ProfilePersonal';
import Lecturers from './layouts/Lecturers';
import Scoreup from './pages/Scoreup';
import DefaultLayoutAdmin from './admin/pages/DefaultLayoutAdmin';
import PointManagement from './admin/pages/PointManagement';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardLayout />} />
                <Route path="/student" element={<DefaultLayout />}>
                    <Route path="" element={<Notification />} />
                    <Route path="attendance" element={<Attendance />} />
                    <Route path="historyStudent" element={<HistoryStudent />} />
                    <Route path="transcript" element={<Transcript />} />
                    <Route path="gradebookbyterm" element={<GradeBookByTerm />} />
                    <Route path="viewscoreboard" element={<ViewScoreboard />} />
                    <Route path="profilepersonal" element={<ProfilePersonal />} />
                </Route>
                <Route path="/lecturers" element={<Lecturers />}>
                    <Route path="scoreup" element={<Scoreup />} />
                    <Route path="viewscoreboard" element={<ViewScoreboard />} />
                </Route>

                <Route path="/admin" element={<DefaultLayoutAdmin />}>
                    <Route path="PointManagement" element={<PointManagement />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
