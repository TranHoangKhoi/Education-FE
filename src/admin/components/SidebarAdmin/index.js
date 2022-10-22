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
        children: [
            {
                key: '15',
                label: 'Danh sách điểm',
                path: 'listpoint',
                icon: <DesktopOutlined />,
            },
            {
                key: '16',
                label: 'Cập nhật điểm',
                path: 'updatepoint',
                icon: <DesktopOutlined />,
            },
        ],
    },
    {
        key: '2',
        label: 'Quản lý thông báo',
        path: 'managenotifications',
        icon: <DesktopOutlined />,
        children: [
            {
                key: '20',
                label: 'Thêm Thông báo',
                path: 'addnotifications',
                icon: <DesktopOutlined />,
            },
            {
                key: '21',
                label: 'Danh sách ',
                path: 'listnotifications',
                icon: <DesktopOutlined />,
            },
            {
                key: '22',
                label: 'Sửa',
                path: 'updatenotifications',
                icon: <DesktopOutlined />,
            },
        ],
    },
    {
        key: '8',
        label: 'Quản lý loại thông báo',
        path: 'manageCategoryNotifications',
        icon: <DesktopOutlined />,
        children: [
            {
                key: '80',
                label: 'Thêm loại Thông báo',
                path: 'addcatenotifications',
                icon: <DesktopOutlined />,
            },
            {
                key: '81',
                label: 'Danh sách loại Thông báo ',
                path: 'listcatenotifications',
                icon: <DesktopOutlined />,
            },
            {
                key: '82',
                label: 'Sửa',
                path: 'updatecatenotifications',
                icon: <DesktopOutlined />,
            },
        ],
    },
    {
        key: '3',
        label: 'Quản lý thông tin liên hệ',
        path: 'contactinformation',
        icon: <DesktopOutlined />,
        children: [
            {
                key: '30',
                label: 'Thêm liên hệ ',
                path: 'addcontact',
                icon: <DesktopOutlined />,
            },
            {
                key: '31',
                label: 'Danh sách liên lệ ',
                path: 'listcontact',
                icon: <DesktopOutlined />,
            },
            {
                key: '32',
                label: 'Sửa liên hệ',
                path: 'updatecontact',
                icon: <DesktopOutlined />,
            },
        ],
    },
    {
        key: '4',
        label: 'Quản lý môn học',
        path: 'subjectmanagement',
        icon: <DesktopOutlined />,
        children: [
            {
                key: '40',
                label: 'Thêm môn học',
                path: 'addsubject',
                icon: <DesktopOutlined />,
            },
            {
                key: '41',
                label: 'Danh sách môn học',
                path: 'listsubject',
                icon: <DesktopOutlined />,
            },
            {
                key: '42',
                label: 'Cập nhật môn học',
                path: 'updatesubject',
                icon: <DesktopOutlined />,
            },
        ],
    },
    {
        key: '5',
        label: 'Quản lý tài khoản',
        path: 'accountmanagement',
        icon: <DesktopOutlined />,
        children: [
            {
                key: '50',
                label: 'Thêm tài khoản ',
                path: 'addaccount',
                icon: <DesktopOutlined />,
            },
            {
                key: '51',
                label: 'Danh sách tài khoản ',
                path: 'listaccount',
                icon: <DesktopOutlined />,
            },
            {
                key: '52',
                label: 'Sửa tài khoản',
                path: 'updateaccount',
                icon: <DesktopOutlined />,
            },
        ],
    },
    {
        key: '6',
        label: 'Quản lý lớp',
        path: 'classmanager',
        icon: <DesktopOutlined />,
        children: [
            {
                key: '61',
                label: 'Thêm lớp ',
                path: 'addclass',
                icon: <DesktopOutlined />,
            },
            {
                key: '62',
                label: 'Danh sách lớp ',
                path: 'listclass',
                icon: <DesktopOutlined />,
            },
            {
                key: '63',
                label: 'Cập nhật  lớp ',
                path: 'updateclass',
                icon: <DesktopOutlined />,
            },
        ],
    },
    {
        key: '7',
        label: 'Quản lý học kỳ',
        path: 'managesemeter',
        icon: <DesktopOutlined />,
        children: [
            {
                key: '70',
                label: 'Thêm học kỳ ',
                path: 'addsemester',
                icon: <DesktopOutlined />,
            },
            {
                key: '71',
                label: 'Danh sách học kỳ ',
                path: 'listsemester',
                icon: <DesktopOutlined />,
            },
            {
                key: '72',
                label: 'Sửa học kỳ',
                path: 'updatesemester',
                icon: <DesktopOutlined />,
            },
        ],
    },
    {
        key: '9',
        label: 'Quản lý khóa học',
        path: 'managecourse',
        icon: <DesktopOutlined />,
        children: [
            {
                key: '90',
                label: 'Thêm khóa học ',
                path: 'addcourse',
                icon: <DesktopOutlined />,
            },
            {
                key: '91',
                label: 'Danh sách khóa học ',
                path: 'listcourse',
                icon: <DesktopOutlined />,
            },
            {
                key: '92',
                label: 'Sửa khóa học',
                path: 'updatecourse',
                icon: <DesktopOutlined />,
            },
        ],
    },
    {
        key: '10',
        label: 'Quản lý chuyên ngành',
        path: 'managemajor',
        icon: <DesktopOutlined />,
        children: [
            {
                key: '101',
                label: 'Thêm chuyên ngành ',
                path: 'addmajor',
                icon: <DesktopOutlined />,
            },
            {
                key: '102',
                label: 'Danh sách chuyên ngành ',
                path: 'listmajor',
                icon: <DesktopOutlined />,
            },
            {
                key: '103',
                label: 'Sửa chuyên ngành',
                path: 'updatemajor',
                icon: <DesktopOutlined />,
            },
        ],
    },
    {
        key: '11',
        label: 'Quản lý địa chỉ',
        path: 'manageaddress',
        icon: <DesktopOutlined />,
        children: [
            {
                key: '110',
                label: 'Thêm địa chỉ ',
                path: 'addaddress',
                icon: <DesktopOutlined />,
            },
            {
                key: '111',
                label: 'Danh sách địa chỉ ',
                path: 'listaddress',
                icon: <DesktopOutlined />,
            },
            {
                key: '112',
                label: 'Sửa địa chỉ',
                path: 'updateaddress',
                icon: <DesktopOutlined />,
            },
        ],
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
            <div className="logo" style={{ padding: 10, display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                <img src="https://ap.poly.edu.vn/images/logo.png" style={{ maxHeight: 70 }} />
            </div>
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
