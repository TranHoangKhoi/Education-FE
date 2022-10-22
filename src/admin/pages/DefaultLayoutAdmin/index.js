import classNames from 'classnames/bind';
import styles from './DefaultLayoutAdmin.module.scss';
import { Layout, Breadcrumb } from 'antd';
import { Outlet } from 'react-router-dom';
import SidebarAdmin from '~/admin/components/SidebarAdmin';
import HeaderAdmin from '~/admin/components/HeaderAdmin';
const cx = classNames.bind(styles);

function DefaultLayoutAdmin() {
    return (
        <div className={cx('wrapper')}>
            <Layout style={{ backgroundColor: '#fff', flexDirection: 'unset' }}>
                <SidebarAdmin />

                <div className={cx('main')}>
                    <HeaderAdmin />
                    <div className={cx('content')}>
                        <Outlet />
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default DefaultLayoutAdmin;
