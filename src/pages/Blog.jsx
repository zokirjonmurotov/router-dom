import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <h1>Blog page</h1>
            <Link to='info1'>info 1</Link>
            <Link to='info2'>info 2</Link>
            <Outlet />
        </div>
    );
}

export default Blog;
