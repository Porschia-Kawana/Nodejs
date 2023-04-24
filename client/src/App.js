import React from "react";
import { NavLink } from 'react-router-dom';

import "./App.scss";

function App(props) {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api/users")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setData(data)
            });
    }, []);

    return (
        <div className="App">
            <header className="header">
                <div className="flag top" role="img" />
                <div className="navigation">
                    <NavLink to="/" className="title" >
                        <h1 >Pōneke Drag Art</h1>
                    </NavLink>
                    <div className="nav-menu">
                        <NavLink to="/events" className="nav-item">
                            <h3>Upcoming Events</h3>
                        </NavLink>
                        <NavLink to="/performers" className="nav-item">
                            <h3>Performers Profiles</h3>
                        </NavLink>
                        <NavLink to="/login" className="nav-item">
                            <h3>Login / Sign Up</h3>
                        </NavLink>
                    </div>
                </div>
                <div className="flag bottom" role="img" />
            </header>
            {props.children}
            <footer></footer>
        </div>
    );
}

export default App;
