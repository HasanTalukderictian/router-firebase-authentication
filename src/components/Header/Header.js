import React from 'react';
import {Link}  from  'react-router-dom';
import './Header.css';
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
     
    const {user} = useFirebase();

    return (
        <div className='Header'>
            <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/register'>Register</Link>
            {
                <Link to='/login'>Login</Link>
            }
            </nav>
        </div>
    );
};

export default Header;