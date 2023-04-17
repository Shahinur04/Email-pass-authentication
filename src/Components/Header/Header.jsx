import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
    return (
        <nav>
           <Link to="/">Home</Link> 
           <Link to="/login">Login</Link> 
           <Link to="/register">Register</Link> 
           <Link to="/registerRbt">RegisterRBT</Link> 
        </nav>
    );
};

export default Header;