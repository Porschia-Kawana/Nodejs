import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './button.scss';

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <button
            className='button login'
            onClick={() =>
                logout({
                    returnTo: window.location.origin,
                })
            }
        >
            <h3>Log Out</h3>
        </button>
    );
};

export default LogoutButton;
