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
import ManageNotifications from './admin/pages/ManageNotifications';
import ContactInformation from './admin/pages/ContactInformation';
import SubjectManagement from './admin/pages/SubjectManagement';
import AccountManagement from './admin/pages/AccountManagement';
import ClassManager from './admin/pages/ClassManager';
import ReviewManagement from './admin/pages/ReviewManagement';

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
                    <Route path="pointmanagement" element={<PointManagement />} />
                    <Route path="managenotifications" element={<ManageNotifications />} />
                    <Route path="contactinformation" element={<ContactInformation />} />
                    <Route path="subjectmanagement" element={<SubjectManagement />} />
                    <Route path="accountmanagement" element={<AccountManagement />} />
                    <Route path="classmanager" element={<ClassManager />} />
                    <Route path="reviewmanagement" element={<ReviewManagement />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
