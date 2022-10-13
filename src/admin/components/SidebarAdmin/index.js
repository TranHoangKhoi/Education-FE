import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './SidebarAdmin.module.scss';
// import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
const { Sider, Content } = Layout;

// function getItem(label, key, icon, children) {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     };
// }
const MenuAdmins = [
    {
        label: 'Quản lý điểm',
        key: 'pointmanagement',
    },
    {
        label: 'Quản lý thông báo',
        key: 'managenotifications',
    },
    {
        label: 'Quản lý thông tin liên hệ',
        key: 'contactinformation',
    },
    {
        label: 'Quản lý môn học',
        key: 'subjectmanagement',
    },
    {
        label: 'Quản lý tài khoản',
        key: 'accountmanagement',
    },
    {
        label: 'Quản lý lớp',
        key: 'classmanager',
    },
    {
        label: 'Quản lý phúc khảo',
        key: 'reviewmanagement',
    },
];
const SidebarAdmin = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout
            style={{
                minHeight: '100vh',
                backgroundColor: '#fff',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" mode="inline">
                    {MenuAdmins.map((data, index) => {
                        return (
                            <Menu.Item key={index}>
                                <Link to={data?.key} key={index}>
                                    {data?.label}
                                </Link>
                            </Menu.Item>
                        );
                    })}
                </Menu>
            </Sider>
        </Layout>
    );
};

export default SidebarAdmin;
