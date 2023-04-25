import React from "react";
import { NavLink } from 'react-router-dom';
import {
    Routes,
    Route,
} from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

import Home from "./pages/Home/Home";
import Profile from './pages/Profile/Profile';

import LoginButton from './components/buttons/login';
import SignupButton from './components/buttons/signup'
import LogoutButton from './components/buttons/logout'

import "./App.scss";

function App(props) {
    const [init, setInit] = React.useState(true);
    const [data, setData] = React.useState(null);
    const { isAuthenticated, user } = useAuth0();

    React.useEffect(() => {
        if (isAuthenticated && user && init) {
            console.log(user)
            fetch(`api/user/${user.sub}`)
                .then(function (response) {
                    console.log(response)
                    if (!response.ok) {
                        fetch("/api/user/create", {
                            method: 'POST',
                            body: JSON.stringify({
                                id: user.sub,
                                username: user.nickname,
                                email: user.email,
                                first_name: user.given_name || "",
                                last_name: user.family_name || ""
                            }),
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                            },
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                console.log(data);
                            })
                            .catch((err) => {
                                console.log(err.message);
                            });
                    }
                    return response.text();
                })
                .then(function (text) {
                    setInit(false)
                    setData(JSON.parse(text))
                })
                .catch(function (error) {
                    console.log('Request failed', error)
                });
        }
    }, [isAuthenticated, user])

    return (
        <div className="App">
            <header className="header">
                <div className="flag top" role="img" />
                <div className="navigation">
                    <NavLink to="/" className="title" >
                        <h1 >Pōneke Drag Art</h1>
                    </NavLink>
                    {isAuthenticated ?
                        <>
                            <div className="nav-menu">
                                <NavLink to="/events" className="nav-item">
                                    <h3>Community</h3>
                                </NavLink>
                                <NavLink to="/profile" className="nav-item">
                                    <h3>Profile</h3>
                                </NavLink>
                            </div>
                            <div className="nav-menu">
                                <LogoutButton />
                            </div>
                        </>
                        :
                        <>
                            <div className="nav-menu">
                                <NavLink to="/events" className="nav-item">
                                    <h3>Upcoming Events</h3>
                                </NavLink>
                                <NavLink to="/performers" className="nav-item">
                                    <h3>Performers Profiles</h3>
                                </NavLink>
                            </div>
                            <div className="nav-menu">
                                <LoginButton />
                                <SignupButton />
                            </div>
                        </>
                    }
                </div>
                <div className="flag bottom" role="img" />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" />
                <Route path="/performers" />
                <Route path="/profile" element={<Profile data={data} />} />
            </Routes>
            <footer></footer>
        </div>
    );
}

export default App;
