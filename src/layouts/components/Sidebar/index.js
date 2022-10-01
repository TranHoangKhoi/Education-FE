import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
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
            to: '/checkpoint',
        },
        {
            icon: <FontAwesomeIcon icon={faBell} />,
            title: 'Lịch học',
            // Schedule
            actions: <FontAwesomeIcon className={cx('navBar__Link--actions')} icon={faChevronRight} />,
        },
        {
            icon: <FontAwesomeIcon icon={faBell} />,
            to: '/point',
            title: 'Điểm',
        },
    ];
    const [active, SetActive] = useState(false);
    const handleAdd = (e) => {
        // debugger;
        if (e) {
            SetActive(!active);
        }
    };
    return (
        <div className={cx('aside')}>
            {/* <input type="checkbox" id={'nav-toogle'} /> */}
            <div className={cx('aside_Brand')}>
                <div className={cx('asideBrandLogo')}>
                    <a href="http://localhost:3001/Student">
                        <img className={cx('asideImageLogo')} src="https://ap.poly.edu.vn/images/logo.png" />
                    </a>
                </div>
                <div className={cx('ToolSidebar')}>
                    <button className={cx('asideToggle')}>
                        {/* <label for={cx('nav-toggle')}>
                        </label> */}
                        <span className={cx('asideBarToggleBox')}>
                            <FontAwesomeIcon className={cx('bar_toggle')} icon={faAnglesLeft} />
                        </span>
                    </button>
                </div>
            </div>
            <div className={cx('nav')}>
                <div className={cx('navBar')}>
                    <ul className={cx('navBarMenu')}>
                        {menuItems.map((item, index) => (
                            <li className={cx('navBar__Menu-Item')}>
                                <Link
                                    to={item.to}
                                    key={index}
                                    onClick={() => handleAdd(item.actions)}
                                    className={cx('navBar__Menu--Link')}
                                >
                                    <span className={cx('navBar__Link--Icon')}>{item.icon}</span>
                                    <span className={cx('navBar__Link--Text')}>{item.title}</span>
                                    <div className={cx('navBar__Link--actions')}>{item.actions}</div>
                                </Link>
                                {active ? (
                                    <div className={cx('subMenu')}>
                                        <ul className={cx('subMenuBox')}>
                                            <li className={cx('subMenuItem')}>Children 1</li>
                                        </ul>
                                    </div>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;
