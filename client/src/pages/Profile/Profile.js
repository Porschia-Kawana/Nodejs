import React, { useEffect, useState } from "react";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import NewAccount from "./NewAccount";
import Account from "./Account";
import Loading from '../../molecules/loading';

import './Profile.scss';

function Profile() {
    const { user } = useAuth0();

    const [newAccount, setNewAccount] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        if (!data) {
            fetch(`api/user/${user.sub}`)
                .then((res) => {
                    return res.text();
                })
                .then((res) => {
                    const response = JSON.parse(res)
                    const init = localStorage.getItem("newAccount");
                    setNewAccount(init)
                    setData({
                        id: response.id,
                        first_name: response.first_name,
                        last_name: response.last_name,
                        email: response.email,
                    })
                })
                .catch((error) => {
                    console.log('Request failed', error)
                });
        }
    }, [data])

    return (
        <div className="Profile">
            {data && newAccount && <NewAccount data={data} openProfile={() => setNewAccount(false)} />}
            {data && !newAccount && <Account data={data} user={user} />}
        </div>
    );
}

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Loading />,
});
