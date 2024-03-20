import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Hreader = () => {
    return (
        <div className='header-style'>
            <div className='style-login'>
            <Link to="/registration" >Registration</Link>
            <Link to="/login" >Login</Link>
            </div>
            <div className='style-compo'>
            <Link to="/home" >Home</Link>
            <Link to="/home" >About</Link>
            <Link to="/home" >All</Link>
            </div>
        </div>
    );
};

export default Hreader;