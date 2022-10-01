import { DashboardLayout } from '~/layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Student from '~/pages/Student';
import Checkpoint from '~/pages/Checkpoint';
import Schedule from '~/pages/Schedule';
import Point from '~/pages/Point';
// 0 dang nhap
const publicRoute = [];
// phai dang nhap
const privateRoute = [
    { path: '/', component: Home, layout: DashboardLayout },
    { path: '/following', component: Following },
    { path: '/student', component: Student },
    { path: '/checkpoint', component: Checkpoint },
    { path: '/schedule', component: Schedule },
    { path: '/point', component: Point },
];

export { publicRoute, privateRoute };
