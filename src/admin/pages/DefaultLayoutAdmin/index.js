import classNames from 'classnames/bind';
import styles from './DashboardAdmin.module.scss';
import { Layout, Breadcrumb } from 'antd';
import { Outlet } from 'react-router-dom';
import SidebarAdmin from '~/admin/components/SidebarAdmin';
const cx = classNames.bind(styles);
const { Content } = Layout;

function DefaultLayoutAdmin() {
    return (
        <div className={cx('row')}>
            <Layout style={{ backgroundColor: '#fff', flexDirection: 'unset' }}>
                <SidebarAdmin />

                <div className={cx('main')}>
                    <Outlet />
                </div>
            </Layout>
        </div>
    );
}

export default DefaultLayoutAdmin;
