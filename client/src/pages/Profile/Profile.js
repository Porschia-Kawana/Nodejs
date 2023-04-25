import React from "react";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../../components/loading/index'
function Profile(props) {
    const [data, setData] = React.useState(null);

    console.log(props)

    return (
        <div className="Profile">
            <p>Profile</p>
        </div>
    );
}

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Loading />,
});
