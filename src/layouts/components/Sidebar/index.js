import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import SidebarItem from './SubSidebar/SidebarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Sidebar(props) {
    const { menuItems } = props;
    const [aside, setAside] = useState();
    const handleHoverAside = () => {
        setAside(!aside);
    };

    return (
        <div className={!aside ? cx('aside') : cx('aside_wrapper--click')}>
            <div className={cx('aside_Brand')}>
                <div className={cx('asideBrandLogo')}>
                    <a href="http://localhost:3001/Student">
                        <img className={cx('asideImageLogo')} src="https://ap.poly.edu.vn/images/logo.png" />
                    </a>
                </div>
                <div className={cx('ToolSidebar')} onClick={handleHoverAside}>
                    <button className={cx('asideToggle')}>
                        <span className={cx('asideBarToggleBox')}>
                            <FontAwesomeIcon className={cx('bar_toggle')} icon={faAnglesLeft} />
                        </span>
                    </button>
                </div>
            </div>
            <div className={cx('navBar-wrapper')}>
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
