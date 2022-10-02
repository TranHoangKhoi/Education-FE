import { DashboardLayout } from '~/layouts';
import Home from '~/pages/Home';
import Notification from '~/pages/Notification';
// 0 dang nhap
const publicRoute = [];
// phai dang nhap
const privateRoute = [
    { path: '/', component: Home, layout: DashboardLayout },
    { path: '/student', component: Notification },
];

export { publicRoute, privateRoute };
