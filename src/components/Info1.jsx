import React from 'react';
import { Outlet } from 'react-router-dom';

const Info1 = () => {
    return (
        <div>
            <h1>Info1</h1>
            <p>bu info 1 ning malumotlari Lorem ipsum dolor sit.</p>
            <Outlet />
        </div>
    );
}

export default Info1;
