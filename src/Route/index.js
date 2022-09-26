import Home from '~/pages/Home';
import Following from '~/pages/Following';
// 0 dang nhap
const publicRoute = [];
// phai dang nhap
const privateRoute = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];
export { privateRoute };
