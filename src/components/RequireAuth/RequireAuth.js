import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import {Navigate, useLocation} from 'react-router-dom';


const auth = getAuth(app);

const RequireAuth = ({children}) => {

    const [user] = useAuthState(auth);
    let location = useLocation();
    
    if(!user){
        return <Navigate to="/login" state={{from:location}}></Navigate>
    }

    return children;
};

export default RequireAuth;