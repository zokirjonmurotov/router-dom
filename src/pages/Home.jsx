import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


    return (
        <div>
            <h1>Home page</h1>
            <Link to='/about'>go to the about</Link>
            {data.map((product)=>(
                <Card title={product.title} desc={product.desc} />
            ))}
        </div>
    );
}

export default Home;
