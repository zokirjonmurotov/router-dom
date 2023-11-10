import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.navbar} >
            <h2><Link to='/'>Logo</Link></h2>
            <div className={classes.nav}>
            <Link to='/about'>About us</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/products'>Products page</Link>
            </div>
        </div>
    );
}

export default Navbar;
