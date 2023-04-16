import React from 'react';

const SignUp = () => {
    return (
        <div>
            <h2>If you new please register now</h2>
            <form >
                <input type="email" name="email" id="email" placeholder='your email' />
                <br />
                <input type="password" name="password" id="password" placeholder='your password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default SignUp;