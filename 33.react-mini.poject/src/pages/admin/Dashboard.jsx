import React from 'react'
import AdminProducts from './Products'


const Dashboard = () => {
    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <AdminProducts />
        </div>
    );
};

export default Dashboard;