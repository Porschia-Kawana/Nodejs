import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Header from "./templates/header";
import Home from "./pages/Home/Home";
import Profile from './pages/Profile/Profile';

import "./App.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" />
                <Route path="/performers" />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
