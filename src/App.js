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
// import ContactInformation from './admin/pages/ContactInformation';
import { AddContact, ListContact, UpdateContact } from './admin/pages/ContactInformation';
import SubjectManagement from './admin/pages/SubjectManagement';
import AccountManagement from './admin/pages/AccountManagement';
// import ClassManager from './admin/pages/ClassManager';
import ReviewManagement from './admin/pages/ReviewManagement';
import Login from './layouts/Login';
import ManageCategoryNotifications from './admin/pages/ManageCategoryNotifications';

//classmanager
import { AddClass, ListClass } from './admin/pages/ClassManager';
//ategoryNotifications
import {
    AddCategoryNotifications,
    ListCategoryNotifications,
    UpdateCategoryNotifications,
} from './admin/pages/ManageCategoryNotifications';
// managerment Semester (học kì)
import { AddSemester, ListSemester, UpdateSemester } from './admin/pages/ManageSemester';

//managerment Course(Khóa học)
import { AddCourse, ListCourse, UpdateCourse } from './admin/pages/ManageCourse';
// managerment Major (chuyên ngành)
import { AddMajor, ListMajor, UpdateMajor } from './admin/pages/ManageMajor';
import AddNotifications from './admin/pages/ManageNotifications/AddNotifications';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardLayout />} />
                <Route path="/login" element={<Login />} />
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

                    {/* start notifications */}
                    <Route path="managenotifications" element={<ManageNotifications />} />
                    <Route path="addnotifications" element={<AddNotifications />} />
                    {/* <Route path="listnotifications" element={<ListNotifications />} />
                        <Route path="updatenotifications" element={<UpdateNotifications />} /> */}
                    {/* End notifications */}

                    {/* -----start contact------ */}
                    {/* <Route path="contactinformation" element={<ContactInformation />} /> */}
                    <Route path="addcontact" element={<AddContact />} />
                    <Route path="listcontact" element={<ListContact />} />
                    <Route path="updatecontact" element={<UpdateContact />} />
                    {/*---- end contact -----*/}
                    <Route path="subjectmanagement" element={<SubjectManagement />} />
                    <Route path="accountmanagement" element={<AccountManagement />} />
                    {/* <Route path="classmanager" element={<ClassManager />} /> */}
                    <Route path="addclass" element={<AddClass />} />
                    <Route path="listclass" element={<ListClass />} />

                    <Route path="reviewmanagement" element={<ReviewManagement />} />
                    {/* start loại thông tin  */}
                    {/* <Route path="manageCategoryNotifications" element={<ManageCategoryNotifications />}/> */}
                    <Route path="addcatenotifications" element={<AddCategoryNotifications />} />
                    <Route path="listcatenotifications" element={<ListCategoryNotifications />} />
                    <Route path="updatecatenotifications" element={<UpdateCategoryNotifications />} />
                    {/* end cate thông tin */}

                    {/* ---start Semester ---*/}
                    <Route path="addsemester" element={<AddSemester />} />
                    <Route path="listsemester" element={<ListSemester />} />
                    <Route path="updatesemester" element={<UpdateSemester />} />
                    {/* End Semester */}

                    {/* ---start course ---*/}
                    <Route path="addcourse" element={<AddCourse />} />
                    <Route path="listcourse" element={<ListCourse />} />
                    <Route path="updatecourse" element={<UpdateCourse />} />
                    {/* end course */}

                    {/* ---start Major ---*/}
                    <Route path="addmajor" element={<AddMajor />} />
                    <Route path="listmajor" element={<ListMajor />} />
                    <Route path="updatemajor" element={<UpdateMajor />} />
                    {/* end Major */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
