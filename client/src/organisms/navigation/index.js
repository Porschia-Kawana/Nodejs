import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Button from '../../atoms/button'

import "./index.scss";

function Navigation() {
    const [init, setInit] = useState(false)
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    useEffect(() => {
        if (isAuthenticated && user && init) {
            fetch(`api/user/${user.sub}`)
                .then(function (response) {
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
                            .then(() => {
                                localStorage.setItem("newAccount", true);
                                setInit(false)
                            })
                            .catch((err) => {
                                console.log(err.message);
                            });
                    }
                    return response.text();
                })
                .then(function (text) {
                    setInit(false)
                })
                .catch(function (error) {
                    console.log('Request failed', error)
                });
        }
    }, [isAuthenticated, user])

    return (
        <div className="navigation">
            <NavLink to="/" className="navigation__title" >
                <h1>Pōneke Drag Art</h1>
            </NavLink>
            {isAuthenticated ?
                <div className="navigation__menu">
                    <NavLink to="/events" className="navigation__menu__item">
                        <Button style="text" name="Community" />
                    </NavLink>
                    <NavLink to="/profile" className="navigation__menu__item">
                        <Button style="text" name="Profile" />
                    </NavLink>
                    <div className="navigation__menu__item">
                        <Button name="Logout" style="text" onClick={() =>
                            logout({
                                returnTo: window.location.origin,
                            })
                        } />
                    </div>
                </div>
                :
                <div className="navigation__menu">
                    <NavLink to="/events" className="navigation__menu__item">
                        <Button style="text" name="Events" />
                    </NavLink>
                    <NavLink to="/performers" className="navigation__menu__item">
                        <Button style="text" name="Performers" />
                    </NavLink>
                    <div className="navigation__menu__item">
                        <Button name="Login" style="text" onClick={() => loginWithRedirect()} />
                    </div>
                    <div className="navigation__menu__item">
                        <Button name="Sign up" style="text" onClick={() =>
                            loginWithRedirect({
                                screen_hint: 'signup',
                            })
                        } />
                    </div>
                </div>
            }
        </div>
    );
}

export default Navigation;
