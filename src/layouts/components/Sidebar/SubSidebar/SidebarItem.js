import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SidebarItem.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function SidebarItem({ item }) {
    const [open, setOpen] = useState(false);

    if (item.childrens) {
        return (
            <div className={open ? cx('sidebar-item', 'open') : cx('sidebar-item')}>
                <Link to={item.to} className={cx('sidebar-title')} onClick={() => setOpen(!open)}>
                    <span className={cx('span')}>
                        {<div className={cx('icon_sidebar--item')}>{item.icon}</div>}
                        {<div className={cx('icon_sidebar--title')}>{item.title}</div>}
                    </span>
                    <span className={cx('icon_sidebar--item')}>
                        <FontAwesomeIcon className={cx('toggle-btn')} icon={item.actions}></FontAwesomeIcon>
                    </span>
                </Link>
                <div className={cx('sidebar-content')}>
                    {item.childrens.map((child, index) => (
                        <SidebarItem key={index} item={child} />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className={cx('sidebar-item')}>
                <Link to={item.to}>
                    <div className={cx('sidebar-title')}>
                        <span className={cx('span')}>
                            <div className={cx('icon_sidebar--item')}>{item.icon}</div>
                            {item.title}
                        </span>
                        <span className={cx('icon_sidebar--item')}>
                            {/* <FontAwesomeIcon className={cx('toggle-btn')} icon={item.actions}></FontAwesomeIcon> */}
                        </span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default SidebarItem;
