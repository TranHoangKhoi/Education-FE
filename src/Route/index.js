import { DashboardLayout } from '~/layouts';
import Home from '~/pages/Home';
import Notification from '~/pages/Notification';
import HistoryStudent from '~/pages/HistoryStudent';
import Transcript from '~/pages/Transcript';
import GradeBookByTerm from '~/pages/GradeBookByTerm';
import Scoreup from '~/pages/Scoreup';

// 0 dang nhap
const publicRoute = [];
// phai dang nhap
const privateRoute = [
    { path: '/', component: Home, layout: DashboardLayout },
    { path: '/student', component: Notification },
    { path: '/history', component: HistoryStudent },
    { path: '/transcript', component: Transcript },
    { path: '/gradeBookByTerm', component: GradeBookByTerm },
    { path: '/Scoreup', component: Scoreup },
];

export { publicRoute, privateRoute };
