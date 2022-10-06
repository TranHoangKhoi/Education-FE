import { DashboardLayout } from '~/layouts';
import Home from '~/pages/Home';
import Notification from '~/pages/Notification';
import HistoryStudent from '~/pages/HistoryStudent';
import Transcript from '~/pages/Transcript';

// 0 dang nhap
const publicRoute = [];
// phai dang nhap
const privateRoute = [
    { path: '/', component: Home, layout: DashboardLayout },
    { path: '/student', component: Notification },
    { path: '/history', component: HistoryStudent },
    { path: '/transcript', component: Transcript },
];

export { publicRoute, privateRoute };
