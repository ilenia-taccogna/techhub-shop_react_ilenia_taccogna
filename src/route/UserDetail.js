import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const UserDetail = () => {
    const location = useLocation();
    const { user } = location.state || { user: {} };

    if (!user.username) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar>
                <div style={{ padding: '20px', color: 'white', backgroundColor: '#333' }}>
                    <h1>Account settings</h1>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{
                            backgroundColor: '#434343', padding: '20px', borderRadius: '10px'

                        }}>
                            <h2>Username*</h2>
                            <p>{user.username}</p>
                            <h2>Business email*</h2>
                            <p>{user.businessEmail}</p>
                            <h2>Password*</h2>
                            <p>****************</p>
                            <h2>Store name</h2>
                            <p>{user.storeName}</p>
                            <h2>Employee ID</h2>
                            <p>{user.employeeId}</p>
                            <h2>Current position</h2>
                            <p>{user.currentPosition}</p>
                        </div>
                        <div style={{ backgroundColor: '#434343', padding: '20px', borderRadius: '10px' }}>
                            <h2>Ordini</h2>
                            {user.orders && user.orders.map((order) => (
                                <p key={order.id}>{order.items[0].name}</p>
                            ))}
                        </div>
                        <div style={{ backgroundColor: '#434343', padding: '20px', borderRadius: '10px' }}>
                            <h2>Grafico</h2>
                        </div>
                    </div>
                </div>
            </Navbar>
        </>



    );
};

export default UserDetail;
