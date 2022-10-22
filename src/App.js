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
// start point
import PointManagement from './admin/pages/PointManagement';
import ListPoint from './admin/pages/PointManagement/ListPoint';
import UpdatePoint from './admin/pages/PointManagement/UpdatePoint';
// end point

// start Notifications
import ManageNotifications from './admin/pages/ManageNotifications';
import AddNotifications from './admin/pages/ManageNotifications/AddNotifications';
import ListNotifications from './admin/pages/ManageNotifications/ListNotifications';
import UpdateNotifications from './admin/pages/ManageNotifications/UpdateNotifications';
// end Notifications

// start contact
import ContactInformation from './admin/pages/ContactInformation';
import AddContact from './admin/pages/ContactInformation/AddContact';
import ListContact from './admin/pages/ContactInformation/ListContact';
import UpdateContact from './admin/pages/ContactInformation/UpdateContact';
// end contact

//start address
import ManageAddress from './admin/pages/ManageAddress';
import AddAddress from './admin/pages/ManageAddress/AddAddress';
import ListAddress from './admin/pages/ManageAddress/ListAddress';
import UpdateAddress from './admin/pages/ManageAddress/UpdateAddress';
//end address

import SubjectManagement from './admin/pages/SubjectManagement';
import AddSubjet from './admin/pages/SubjectManagement/AddSubject';
import UpdateSubject from './admin/pages/SubjectManagement/UpdateSubject';
import ListSubject from './admin/pages/SubjectManagement/ListSubject';
// endsubject

// start account
import AccountManagement from './admin/pages/AccountManagement';
import ListAccount from './admin/pages/AccountManagement/ListAccount';
import UpdateAccount from './admin/pages/AccountManagement/UpdateAccount';
import AddAccount from './admin/pages/AccountManagement/AddAccount';

//end account

// import ClassManager from './admin/pages/ClassManager';
import ReviewManagement from './admin/pages/ReviewManagement';
import Login from './layouts/Login';

//classmanager
import ClassManager from './admin/pages/ClassManager';
import ListClass from './admin/pages/ClassManager/ListClass';
import UpdateClass from './admin/pages/ClassManager/UpdateClass';
import AddClass from './admin/pages/ClassManager/AddClass';
// start categoryNotifications
import ManageCategoryNotifications from './admin/pages/ManageCategoryNotifications';
import AddCategoryNotifications from './admin/pages/ManageCategoryNotifications/AddCategoryNotifications';
import ListCategoryNotifications from './admin/pages/ManageCategoryNotifications/ListCategoryNotifications';
import UpdateCategoryNotifications from './admin/pages/ManageCategoryNotifications/UpdateCategoryNotifications';
// end categoryNotifications

// start managerment Semester (học kì)
import ManagerSemester from './admin/pages/ManageSemester';
import AddSemester from './admin/pages/ManageSemester/AddSemester';
import ListSemester from './admin/pages/ManageSemester/ListSemester';
import UpdateSemester from './admin/pages/ManageSemester/UpdateSemester';
// end managerment Semester (học kì)

// start managerment Course(Khóa học)
import ManageCourse from './admin/pages/ManageCourse';
import AddCourse from './admin/pages/ManageCourse/AddCourse';
import ListCourse from './admin/pages/ManageCourse/ListCourse';
import UpdateCourse from './admin/pages/ManageCourse/UpdateCourse';
// end managerment Course(Khóa học)

// start managerment Major (chuyên ngành)
import ManageMajor from './admin/pages/ManageMajor';
import AddMajor from './admin/pages/ManageMajor/AddMajor';
import ListMajor from './admin/pages/ManageMajor/ListMajor';
import UpdateMajor from './admin/pages/ManageMajor/UpdateMajor';
// end managerment Major (chuyên ngành)

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
                    <Route path="pointmanagement" element={<PointManagement />}>
                        <Route path="listpoint" element={<ListPoint />} />
                        <Route path="updatepoint" element={<UpdatePoint />} />
                    </Route>

                    {/* start notifications */}
                    <Route path="managenotifications" element={<ManageNotifications />}>
                        <Route path="addnotifications" element={<AddNotifications />} />
                        <Route path="listnotifications" element={<ListNotifications />} />
                        <Route path="updatenotifications" element={<UpdateNotifications />} />
                    </Route>
                    {/* <Route path="listnotifications" element={<ListNotifications />} />
                        <Route path="updatenotifications" element={<UpdateNotifications />} /> */}
                    {/* End notifications */}

                    {/* -----start contact------ */}
                    <Route path="contactinformation" element={<ContactInformation />}>
                        <Route path="addcontact" element={<AddContact />} />
                        <Route path="listcontact" element={<ListContact />} />
                        <Route path="updatecontact" element={<UpdateContact />} />
                    </Route>
                    {/*---- end contact -----*/}

                    {/* start address */}
                    <Route path="manageaddress" element={<ManageAddress />}>
                        <Route path="addaddress" element={<AddAddress />} />
                        <Route path="listaddress" element={<ListAddress />} />
                        <Route path="updateaddress" element={<UpdateAddress />} />
                    </Route>
                    {/* end address */}

                    <Route path="subjectmanagement" element={<SubjectManagement />} />
                    {/* start account */}
                    <Route path="accountmanagement" element={<AccountManagement />}>
                        <Route path="addaccount" element={<AddAccount />} />
                        <Route path="listaccount" element={<ListAccount />} />
                        <Route path="updateaccount" element={<UpdateAccount />} />
                    </Route>

                    {/* end account */}

                    {/* start class */}
                    <Route path="classmanager" element={<ClassManager />}>
                        <Route path="addclass" element={<AddClass />} />
                        <Route path="listclass" element={<ListClass />} />
                        <Route path="updateclass" element={<UpdateClass />} />
                    </Route>
                    {/* endclass */}

                    <Route path="reviewmanagement" element={<ReviewManagement />} />
                    {/* start loại thông tin  */}
                    <Route path="manageCategoryNotifications" element={<ManageCategoryNotifications />}>
                        <Route path="addcatenotifications" element={<AddCategoryNotifications />} />
                        <Route path="listcatenotifications" element={<ListCategoryNotifications />} />
                        <Route path="updatecatenotifications" element={<UpdateCategoryNotifications />} />
                    </Route>
                    {/* end cate thông tin */}

                    {/* ---start Semester ---*/}
                    <Route path="managesemeter" element={<ManagerSemester />}>
                        <Route path="addsemester" element={<AddSemester />} />
                        <Route path="listsemester" element={<ListSemester />} />
                        <Route path="updatesemester" element={<UpdateSemester />} />
                    </Route>
                    {/* End Semester */}

                    {/* ---start course ---*/}
                    <Route path="managecourse" element={<ManageCourse />}>
                        <Route path="addcourse" element={<AddCourse />} />
                        <Route path="listcourse" element={<ListCourse />} />
                        <Route path="updatecourse" element={<UpdateCourse />} />
                    </Route>
                    {/* end course */}

                    {/* ---start Major ---*/}
                    <Route path="managemajor" element={<ManageMajor />}>
                        <Route path="addmajor" element={<AddMajor />} />
                        <Route path="listmajor" element={<ListMajor />} />
                        <Route path="updatemajor" element={<UpdateMajor />} />
                    </Route>
                    {/* end Major */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
