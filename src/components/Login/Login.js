import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app);

const Login = () => {
    
    const  [signInWithGoogle, user] = useSignInWithGoogle(auth);

    return (
        <div>
            <h2>This is Login Page</h2>
            <div style={{margin:'20px'}}>
                 <button onClick={() => signInWithGoogle()}>Google Sign In</button>
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