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
import AddSubject from './admin/pages/SubjectManagement/AddSubject';
import UpdateSubject from './admin/pages/SubjectManagement/UpdateSubject';
import ListSubject from './admin/pages/SubjectManagement/ListSubject';
// endsubject

// start student
import StudentManagement from './admin/pages/StudentManagement';
import ListStudent from './admin/pages/StudentManagement/ListStudent';
import UpdateStudent from './admin/pages/StudentManagement/UpdateStudent';
import AddStudent from './admin/pages/StudentManagement/AddStudent';
//end student

// start admin
import AdminManagement from './admin/pages/AdminManagement';
import AddAdmin from './admin/pages/AdminManagement/AddAdmin';
import ListAdmin from './admin/pages/AdminManagement/ListAdmin';
import UpdateAdmin from './admin/pages/AdminManagement/UpdateAdmin';
//end admin

// start Lecturers
import LecturersManagement from './admin/pages/LecturersManagement';
import AddLecturers from './admin/pages/LecturersManagement/AddLecturers';
import ListLecturers from './admin/pages/LecturersManagement/ListLecturers';
import UpdateLecturers from './admin/pages/LecturersManagement/UpdateLecturers';
//end Lecturers 

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

function App()
{
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

<<<<<<< HEAD
                        {/* {star objject} */}
                    <Route path="subjectmanagement" element={<SubjectManagement />}>
                        <Route path="addsubject" element={<AddSubject />} />
                        <Route path="listsubject" element={<ListSubject />} />
                        <Route path="updatesubject" element={<UpdateSubject/>} />
                        </Route>
                        {/* endobject  */}

                    {/* start account */}
                    <Route path="accountmanagement" element={<AccountManagement />}>
                        <Route path="addaccount" element={<AddAccount />} />
                        <Route path="listaccount" element={<ListAccount />} />
                        <Route path="updateaccount" element={<UpdateAccount />} />
=======
                    <Route path="subjectmanagement" element={<SubjectManagement />} >
                        <Route path='addsubject' element={<AddSubjet />} />
                        <Route path='listsubject' element={<ListSubject />} />
                        <Route path='updatesubject' element={<UpdateSubject />} />
>>>>>>> 39c7799aa0c86d59bb405f8d4ee131634f38d4cd
                    </Route>
                    {/* start student */}
                    <Route path="studentmanagement" element={<StudentManagement />}>
                        <Route path="addstudent" element={<AddStudent />} />
                        <Route path="liststudent" element={<ListStudent />} />
                        <Route path="updatestudent" element={<UpdateStudent />} />
                    </Route>
                    {/* end student */}

                    {/* start admin  */}
                    <Route path="adminmanagement" element={<AdminManagement />}>
                        <Route path="addadmin" element={<AddAdmin />} />
                        <Route path="listadmin" element={<ListAdmin />} />
                        <Route path="updateadmin" element={<UpdateAdmin />} />
                    </Route>
                    {/* end admin */}

                    {/* start Lecturers  */}
                    <Route path="lecturersmanagement" element={<LecturersManagement />}>
                        <Route path="addlecturers" element={<AddLecturers />} />
                        <Route path="listlecturers" element={<ListLecturers />} />
                        <Route path="updatelecturers" element={<UpdateLecturers />} />
                    </Route>
                    {/* end Lecturers */}

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
