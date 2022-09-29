import classNames from 'classnames/bind';
import Header from '~/layouts/DashboardLayout/Header';
import Footer from '~/layouts/DashboardLayout/Footer';
import style from './DashboardLayout.module.scss';

const cx = classNames.bind(style);

function DashboardLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DashboardLayout;
