import { DashboardLayout } from '~/layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Student from '~/pages/Student';
// 0 dang nhap
const publicRoute = [];
// phai dang nhap
const privateRoute = [
    { path: '/', component: Home, layout: DashboardLayout },
    { path: '/following', component: Following },
    { path: '/student', component: Student },
];

export { publicRoute, privateRoute };
