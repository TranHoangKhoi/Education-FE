import Header from '~/layouts/DashboardLayout/Header';
import Footer from '~/layouts/DashboardLayout/Footer';
import classNames from 'classnames/bind';
import style from './DashboardLayout.module.scss';
import Home from '~/pages/Home';

const cx = classNames.bind(style);

function DashboardLayout() {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <Home />
            </div>
            <Footer />
        </div>
    );
}

export default DashboardLayout;
