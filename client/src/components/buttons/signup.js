import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './button.scss';

const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button
            className='button login'
            onClick={() =>
                loginWithRedirect({
                    screen_hint: 'signup',
                })
            }
        >
            <h3>Sign Up</h3>
        </button>
    );
};

export default SignupButton;
