import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    HomeOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import CardContainer from '../components/CardContainer';
import TableUser from '../route/TableUser';


const { Search } = Input;
const { Header, Sider, Content, Footer } = Layout;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const Navbar = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Layout className='mainLayout'>
                <Sider
                    style={{
                        background: '#434343',
                        color: 'white',

                    }}
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    breakpoint="lg"
                    onBreakpoint={broken => {
                        setCollapsed(broken);
                    }}
                >
                    <div className="demo-logo-vertical" />
                    <Menu
                        style={{
                            background: '#434343',
                            color: 'white',
                            height: '1000px',
                        }}
                        items={[
                            {
                                key: '1',
                                icon: <HomeOutlined style={{ color: 'white' }} />,
                                label: <Link style={{ color: 'white' }} to="/">Home</Link>,
                            },
                            {
                                key: '2',
                                icon: <UserOutlined style={{ color: 'white' }} />,
                                label: <Link style={{ color: 'white' }} to="/TableUser">Users</Link>,
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined style={{ color: 'white' }} />,
                                label: <Link style={{ color: 'white' }} to="/logout">Log out</Link>,
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header className='header'
                        style={{
                            padding: 0,
                            background: '#434343',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                color: 'white',
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <Link
                            style={{
                                color: 'white',
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginLeft: 20,
                            }}
                            to="/"
                        >TechHub</Link>
                        <Search
                            onSearch={onSearch}
                            style={{
                                width: 250,
                                marginLeft: 'auto',
                                marginRight: 20,
                                borderRadius: 20,
                            }}
                        />
                    </Header>
                    <Content
                        style={{
                            color: 'white',
                            background: 'black',
                            padding: 20,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout >
        </>
    );
}

export default Navbar;