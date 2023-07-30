import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {

    const {signInWithGoogle} = useFirebase();

    return (
        <div>
            <h2>This is Login Page</h2>
            <div style={{margin:'20px'}}>
                 <button onClick={signInWithGoogle}>Google Sign In</button>
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