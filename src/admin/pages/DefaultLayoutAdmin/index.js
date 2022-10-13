import classNames from 'classnames/bind';
import styles from './DashboardAdmin.module.scss';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import SidebarAdmin from '~/admin/components/SidebarAdmin';
const cx = classNames.bind(styles);

function DefaultLayoutAdmin() {
    return (
        <div>
            <Layout>
                <div>
                    <SidebarAdmin />
                    <div className={cx('main')}>
                        <Outlet />
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default DefaultLayoutAdmin;
