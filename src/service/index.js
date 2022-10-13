import { isLogin } from './constant';

const HandleLogin = () => {
    console.log('isLogin', isLogin);
    if (isLogin) {
        return true;
    }
    return false;
};
export { HandleLogin };
