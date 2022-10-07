import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import SidebarItem from './SubSidebar/SidebarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faBell, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Sidebar() {
    const menuItems = [
        {
            icon: <FontAwesomeIcon icon={faBell} />,
            title: 'Thông báo và tin tức',
            to: '/student',
        },
        {
            icon: <FontAwesomeIcon icon={faBell} />,
            title: 'Điểm danh',
            to: '/student/attendance',
        },
        {
            icon: <FontAwesomeIcon icon={faBell} />,
            title: 'Điểm',
            actions: faChevronRight,
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
    return (
        <div className={cx('aside')}>
            <div className={cx('aside_Brand')}>
                <div className={cx('asideBrandLogo')}>
                    <a href="http://localhost:3001/Student">
                        <img className={cx('asideImageLogo')} src="https://ap.poly.edu.vn/images/logo.png" />
                    </a>
                </div>
                <div className={cx('ToolSidebar')}>
                    <button className={cx('asideToggle')}>
                        <span className={cx('asideBarToggleBox')}>
                            <FontAwesomeIcon className={cx('bar_toggle')} icon={faAnglesLeft} />
                        </span>
                    </button>
                </div>
            </div>
            <div className={cx('nav')}>
                <div className={cx('navBar')}>
                    <div className={cx('navBarMenu')}>
                        {menuItems.map((item, index) => (
                            <Link key={index} to={item.title}>
                                <SidebarItem key={index} path={item.to} item={item} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;
