import style from './Sidebar.module.scss';
import 'boxicons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Sidebar() {
    const [active, SetActive] = useState(false);
    const handleAdd = () => {
        // debugger;
        SetActive(!active);
    };
    return (
        <div className={style.aside}>
            <div className={style.asideBox}>
                <div className={style.asideBrand}>
                    <div className={style.asideBrandLogo}>
                        <a href="http://localhost:3001/Student">
                            <img className={style.asideImageLogo} src="https://ap.poly.edu.vn/images/logo.png" />
                        </a>
                    </div>
                    <div className={style.ToolSidebar}>
                        <button className={style.asideToggle}>
                            <span>
                                <box-icon name="chevrons-left"></box-icon>
                            </span>
                        </button>
                    </div>
                </div>
                <div className={style.nav}>
                    <div className={style.navBar}>
                        <ul className={style.navBarMenu}>
                            <li className={style.navBarMenuItem}>
                                <Link to={'/'} className={style.navBarMenuLink}>
                                    <span className={style.navBarLinkIcon}>
                                        <box-icon name="bell"></box-icon>
                                    </span>
                                    <span className={style.navBarLinkText}>Thông báo và tin tức</span>
                                </Link>
                            </li>
                            <li className={style.navBarMenuItem}>
                                <div onClick={() => handleAdd()} className={style.navBarMenuLink}>
                                    <span className={style.navBarLinkIcon}>
                                        <box-icon name="bell"></box-icon>
                                    </span>
                                    <span className={style.navBarLinkText}>Lịch học</span>
                                    <box-icon
                                        color="red"
                                        className={style.iconSideBarItem}
                                        name="chevron-right"
                                    ></box-icon>
                                </div>
                                {active ? (
                                    <div className={style.subMenu}>
                                        <ul className={style.subMenuBox}>
                                            <li className={style.subMenuItem}>
                                                <Link to={'/'} className={style.subMenuLink}>
                                                    <span className={style.subMenuText}>Thay đổi lịch học</span>
                                                </Link>
                                            </li>
                                            <li className={style.subMenuItem}>
                                                <Link to={'/'} className={style.subMenuLink}>
                                                    <span className={style.subMenuText}>Thay đổi lịch học</span>
                                                </Link>
                                            </li>
                                            <li className={style.subMenuItem}>
                                                <Link to={'/'} className={style.subMenuLink}>
                                                    <span className={style.subMenuText}>Thay đổi lịch học</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                ) : null}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;
