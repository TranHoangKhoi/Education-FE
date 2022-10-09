import Sidebar from '~/layouts/components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faHouseDamage, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from '../components/Sidebar/Sidebar.module.scss';
import Button from '~/components/Button';
import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { faAnglesLeft, faBell, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const menuItems = [
    {
        title: 'Thông báo và tin tức',
        to: '/student',
    },
    {
        title: 'Điểm danh',
        to: '/student/attendance',
    },
    {
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
const DefaultLayout = () => {
    return (
        <Layout>
            <div className={cx('wrapper')}>
                <Sidebar menuItems={menuItems} />
                <header className={cx('header')}>
                    <div className={cx('header__topbar')}>
                        <a href="#" className={cx('header__topbar--item')}>
                            <div className={cx('header__topbar--wrapper')}>
                                <span className={cx('header__topbar--icon')}>
                                    <Button primary onClick={() => alert('123')}>
                                        <FontAwesomeIcon className={cx('logout')} icon={faRightToBracket} />
                                    </Button>
                                </span>
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
                                                        Phòng dịch vụ sinh viên:{' '}
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
