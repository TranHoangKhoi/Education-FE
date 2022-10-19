import Sidebar from '~/layouts/components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRightToBracket,
    faHouseDamage,
    faLocationDot,
    faPhone,
    faEnvelope,
    faBell,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from '../components/Sidebar/Sidebar.module.scss';
import { Layout } from 'antd';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { faIdBadge, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
const menuItems = [
    {
        title: 'Thông báo và tin tức',
        to: '/student',
        icon: <FontAwesomeIcon icon={faBell} />,
    },
    {
        title: 'Điểm danh',
        to: '/student/attendance',
        icon: <FontAwesomeIcon icon={faBell} />,
    },
    {
        title: 'Điểm',
        actions: faChevronRight,
        icon: <FontAwesomeIcon icon={faBell} />,
        childrens: [
            {
                title: 'Thay đổi lịch học',
                to: 'gradebookbyterm',
            },
            {
                title: 'Lịch sử học',
                to: 'historyStudent',
            },
            {
                title: 'Bảng điểm',
                to: 'transcript',
            },
        ],
    },
];

const DefaultLayout = () => {
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem('token');
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };
    useEffect(() => {
        if (!loggedInUser) {
            // Redirect
            navigate('/login');
        }
    }, []);
    const [dropdown, setDropdown] = useState();
    const handleDropdown = () => {
        setDropdown(!dropdown);
    };
    return (
        <Layout style={{ backgroundColor: '#fff' }}>
            <div className={cx('wrapper')}>
                <div className={cx('row')}>
                    <Sidebar menuItems={menuItems} />
                    <div className={cx('wrapper_main')}>
                        <header className={cx('header')}>
                            <div className={cx('header__topbar')}>
                                <Link className={cx('header__topbar--item')}>
                                    <div className={cx('header__topbar--wrapper')}>
                                        <span className={cx('header__topbar--icon')}>
                                            <FontAwesomeIcon className={cx('logout')} icon={faRightToBracket} />
                                        </span>
                                    </div>
                                </Link>
                                <div className={cx('header__topbar-item--user')} onClick={handleDropdown}>
                                    <div className={cx('header__topbar-item--welcome')}>Xin chào,</div>
                                    <div className={cx('header__topbar-item--username')}>Đạt</div>
                                </div>
                                <div className={cx('dropdown_student')}>
                                    <div className={cx('dropdown_student--title')}>
                                        <div className={cx('dropdown_student--Name')}>Trần Minh Đạt</div>
                                    </div>
                                    <div className={cx('notification')}>
                                        <Link to={'profilepersonal'} className={cx('notification__item')}>
                                            <div className={cx('notification__item-icon')}>
                                                <FontAwesomeIcon icon={faIdBadge} className={cx('itemIcon')} />
                                            </div>
                                            <div className={cx('notification__item-details')}>
                                                <div className={cx('notification__item-title')}>Hồ sơ cá nhân</div>
                                                <div className={cx('notification__item-time')}>Thông tin cá nhân</div>
                                            </div>
                                        </Link>
                                        <div className={cx('notification__custom')}>
                                            <button onClick={handleLogout} className={cx('notification_btn-login')}>
                                                Đăng xuất
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('header__bottom')}>
                                <h3>Lịch sử học</h3>
                                <span className={cx('header__bottom--line')}></span>
                                <span className={cx('header__bottom--icon')}>
                                    <FontAwesomeIcon icon={faHouseDamage} />
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
                </div>
                <footer className={cx('footer')}>
                    <div className={cx('footer__content')}>
                        <div className={cx('grid')}>
                            <div className={cx('row')}>
                                <div className={cx('col l-4')}>
                                    <div className={cx('footer__content--logo', 'footer__content--item')}>
                                        <img
                                            className={cx('footer__logo--img')}
                                            src="https://ap.poly.edu.vn/images/logo.png"
                                            alt="Logo"
                                        />
                                        <p className={cx('footer__logo--text')}>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                            <span>
                                                Số 288, Nguyễn Văn Linh, phường An Khánh, quận Ninh Kiều, Tp. Cần Thơ.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className={cx('col l-8')}>
                                    <div className={cx('footer__content--info', 'footer__content--item')}>
                                        <div className={cx('info__heading')}>
                                            <h3>Thông tin liên hệ</h3>
                                        </div>
                                        <div className={cx('info__wrapper')}>
                                            <div className={cx('info__content')}>
                                                <p>
                                                    <i>
                                                        <FontAwesomeIcon icon={faPhone} />
                                                    </i>
                                                    Số điện thoại liên hệ giải đáp ý kiến sinh viên:
                                                    <span className={cx('strong')}>02927300468</span>
                                                </p>
                                            </div>

                                            <div className={cx('info__content')}>
                                                <p>
                                                    <i>
                                                        <FontAwesomeIcon icon={faEnvelope} />
                                                    </i>
                                                    Địa chỉ email các phòng ban:
                                                </p>
                                                <ul className={cx('info__content--list')}>
                                                    <li>
                                                        Phòng dịch vụ sinh viên:
                                                        <span className={cx('strong')}>dvsvpoly.ct@poly.edu.vn</span>
                                                    </li>
                                                    <li>
                                                        Phòng Tổ chức và quản lý đào tạo:
                                                        <ul className={cx('info__content--subList')}>
                                                            <li>
                                                                Đào tạo:
                                                                <span className={cx('strong')}>
                                                                    daotaopolyct@fe.edu.vn
                                                                </span>
                                                            </li>
                                                            <li>
                                                                Khảo thí:
                                                                <span className={cx('strong')}>
                                                                    khaothi.fplct@fpt.edu.vn
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Phòng hành chính:
                                                        <span className={cx('strong')}>hanhchinhpolyct@fe.edu.vn</span>
                                                    </li>
                                                    <li>
                                                        Phòng quan hệ doanh nghiệp:
                                                        <span className={cx('strong')}>qhdn.fplct@fpt.edu.vn</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className={cx('info__content')}>
                                                <p>
                                                    Ý kiến đóng góp chung gửi về ykien.poly@fpt.edu.vn bằng email
                                                    @fpt.edu.vn
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Layout>
    );
};

export default DefaultLayout;
