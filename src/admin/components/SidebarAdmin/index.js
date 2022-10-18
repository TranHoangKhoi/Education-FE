import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './SidebarAdmin.module.scss';
import { DesktopOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
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
        key: '1',
        label: 'Quản lý điểm',
        path: 'pointmanagement',
        icon: <DesktopOutlined />,
    },
    {
        key: '2',
        label: 'Quản lý thông báo',
        path: 'managenotifications',
        icon: <DesktopOutlined />,
        children: [
            {
                key: '20',
                label: 'Thêm',
                path: 'addnotifications',
                icon: <DesktopOutlined />,
            },
            // {
            //     key: '21',
            //     label: 'Sửa',
            //     path: 'listnotifications',
            //     icon: <DesktopOutlined />,
            // },
            // {
            //     key: '22',
            //     label: 'Xóa',
            //     path: 'updatenotifications',
            //     icon: <DesktopOutlined />,
            // },
        ],
    },
    {
        key: '8',
        label: 'Quản lý loại thông báo',
        path: 'manageCategoryNotifications',
        icon: <DesktopOutlined />,
    },
    {
        key: '3',
        label: 'Quản lý thông tin liên hệ',
        path: 'contactinformation',
        icon: <DesktopOutlined />,
    },
    {
        key: '4',
        label: 'Quản lý môn học',
        path: 'subjectmanagement',
        icon: <DesktopOutlined />,
    },
    {
        key: '5',
        label: 'Quản lý tài khoản',
        path: 'accountmanagement',
        icon: <DesktopOutlined />,
    },
    {
        key: '6',
        label: 'Quản lý lớp',
        path: 'classmanager',
        icon: <DesktopOutlined />,
    },
    {
        key: '7',
        label: 'Quản lý học kỳ',
        path: 'addsemester',
        icon: <DesktopOutlined />,
    },
    {
        key: '9',
        label: 'Quản lý khóa học',
        path: 'addcourse',
        icon: <DesktopOutlined />,
    },
    {
        key: '10',
        label: 'Quản lý chuyên ngành',
        path: 'addmajor',
        icon: <DesktopOutlined />,
    },
];
// const dataNEw = MenuAdmins.map((item, index) => {
//     return {
//         key: index + 1,
//         path: item.path,
//     };
// });
// console.log(dataNEw);
const SidebarAdmin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const onClickMenu = (item) => {
        var itemClick = {};
        const clicked = MenuAdmins.find((_item) => {
            if (_item.key === item.key) {
                itemClick = _item;
            }
            _item.children?.find((itemChild) => {
                if (itemChild.key === item.key) {
                    const path = _item.path + '/' + itemChild.path;
                    console.log('tam', path);
                    itemClick = {
                        key: itemChild.key,
                        path: path,
                    };
                }
            });
        });
        navigate(itemClick.path);
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" />
            <Menu theme="dark" items={MenuAdmins} mode="inline" onClick={onClickMenu}>
                {MenuAdmins.map((item) => (
                    <Menu.Item key={item.key}>{item.label}</Menu.Item>
                ))}
            </Menu>
            {/* {MenuAdmins.map((data, index) => {
                        return (
                            <Menu.Item key={index}>
                                {data?.icon}
                                <Link to={data?.key} key={index}>
                                    {data?.label}
                                </Link>
                            </Menu.Item>
                        );
                    })}
                </Menu> */}
        </Sider>
    );
};

export default SidebarAdmin;
