import React, { useEffect, useState } from 'react';
import { Button, Space, Table } from 'antd';
import Users from '../users/Users';
import Navbar from '../components/Navbar';
import { Modal } from "antd";
import {  Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const TableUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = Users();
        setUsers(fetchUsers);
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const navigate = useNavigate();
    const handleUserDetail = (user) => {
        navigate(`/UserDetail/${user.id}`, { state: { user } });
    };
    


    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Business Email',
            dataIndex: 'businessEmail',
            key: 'businessEmail',
        },
        {
            title: 'Store Name',
            dataIndex: 'storeName',
            key: 'storeName',
        },
        {
            title: 'Current Position',
            dataIndex: 'currentPosition',
            key: 'currentPosition',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">

                    <Button onClick={() => handleUserDetail(record)}
                        style={{
                            background: '#fa8c16',
                            color: 'white',
                            marginLeft: '10px',
                            borderColor: '#fa8c16',
                            height: '40px',
                            borderRadius: '15px',
                        }}>
                        View
                    </Button>
                    <Button onClick={showModal}
                        style={{
                            background: '#fa8c16',
                            color: 'white',
                            marginLeft: '10px',
                            borderColor: '#fa8c16',
                            height: '40px',
                            borderRadius: '15px',
                        }}>
                        Edit
                    </Button>
                    <Button
                        style={{
                            background: '#fa8c16',
                            color: 'white',
                            marginLeft: '10px',
                            borderColor: '#fa8c16',
                            height: '40px',
                            borderRadius: '15px',
                        }}>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];




    return (
        <>
            <Navbar>
            <div>
                <h1 style={{ textAlign: 'center', color: 'white' }}>Gestione Utenti</h1>
            </div>
            <Table className="custom-table" columns={columns} dataSource={users} rowKey="employeeId" />
            <Modal className="modal-background"
                title="Edit Profile" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form

                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                        backgroundColor: '#434343',
                        color: 'white',
                        borderRadius: '10px',

                    }}
                    className="form-container"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item

                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input className="input-field" />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input className="input-field" />
                    </Form.Item>
                    <Form.Item
                        label="New Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password

                            className="input-field" />
                    </Form.Item>

                    <Form.Item

                        label="Comunication Preference"
                        name="comunicationPreference"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your comunication preference!',
                            },
                        ]}
                    >
                        <Input className="input-field" />
                    </Form.Item>
                    <Button style={{
                        background: '#fa8c16',
                        color: 'white',
                        marginLeft: '10px',
                        borderColor: '#fa8c16',
                        height: '40px',
                        width: '100%',
                        borderRadius: '15px',
                    }} htmlType="submit">
                        Save Changes
                    </Button>
                    
                </Form>
            </Modal>

        </Navbar>
        </>
    );
};

export default TableUser;
