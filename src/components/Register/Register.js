import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Here Register Section</h3>
            <form >
                <input type="text" placeholder='Your Name' />
                <br />
                <input type='email' placeholder='Enter Your Email'></input>
                <br />
                <input type="password" placeholder='Make a strong Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;