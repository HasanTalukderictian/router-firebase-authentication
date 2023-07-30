import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import {useLocation, useNavigate} from 'react-router-dom';


const auth = getAuth(app);

const Login = () => {
    
    const  [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate  = useNavigate();
    const from = location?.state?.from?.pathname || '/';


    const handleGoogleSignIN =() => {
        signInWithGoogle()
        .then(user =>{
             navigate(from, {replace:true})
        })
    }

    return (
        <div>
            <h2>This is Login Page</h2>
            <div style={{margin:'20px'}}>
                 <button onClick={handleGoogleSignIN}>Google Sign In</button>
            </div>
           
            <form >
                <input type='email' placeholder='Enter Your Email'></input>
                <br />
                <input type="password" placeholder='Make a strong Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;