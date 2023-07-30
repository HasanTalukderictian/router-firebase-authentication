import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth  = getAuth(app);

const Products = () => {
    
    const [user] = useAuthState(auth);

    return (
        <div>
            <h3>Products file Here!!</h3>
            <h5>CurrentUser: {user ? user.displayName : "Booth Here "}</h5>
        </div>
    );
};

export default Products;