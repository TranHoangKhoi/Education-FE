import classNames from 'classnames/bind';
import styles from '../components/Sidebar/Sidebar.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const cx = classNames.bind(styles);

const menuItems = [
    {
        title: 'Lên điểm',
        to: 'scoreup',
    },
    {
        title: 'Xem điểm giảng viên',
        to: 'viewscoreboard',
    },
];
function Lecturer() {
    return (
        <Layout>
            <div className={cx('wrapper')}>
                <Sidebar menuItems={menuItems} />
                <header className={cx('header')}>
                    <div className={cx('header__topbar')}>
                        <a href="#" className={cx('header__topbar--item')}>
                            <div className={cx('header__topbar--wrapper')}>
                                <span className={cx('header__topbar--icon')}></span>
                            </div>
                        </a>
                        <div className={cx('header__topbar-item--user')}>
                            <div className={cx('header__topbar-item--welcome')}>Xin chào,</div>
                            <div className={cx('header__topbar-item--username')}>Đạt</div>
                        </div>
                    </div>

                    <div className={cx('header__bottom')}>
                        <h3>Lịch sử học</h3>
                        <span className={cx('header__bottom--line')}></span>
                        <span className={cx('header__bottom--icon')}>
                            {/* <FontAwesomeIcon icon={faHouseDamage} /> */}
                            <p classname={cx('header__bottom--subText')}>Điểm</p>
                        </span>
                    </div>
                </header>
                <main className={cx('main')}>
                    <div className={cx('content')}>
                        <Outlet />
                    </div>
                </main>
            </div>
        </Layout>
    );
}

export default Lecturer;
