import React, { useState } from "react";

import CreateEvent from "../Events/CreateEvent";
import CreatePerformer from "../Performers/CreatePerformer";

import Button from '../../atoms/button'

import './Profile.scss';

function Account(props) {
    const [showEventsModal, setShowEventsModal] = useState(false);
    const [showPersonasModal, setShowPersonasModal] = useState(false);

    return (
        <div className="Profile">
            <h2>Welcome, {props.data.first_name}</h2>
            <section className="container">
                <article className="menu">
                    <h2>Drag Personas</h2>
                    <div className="button">
                        <Button onClick={() => setShowPersonasModal(true)} name="Create a Drag Persona" />
                    </div>
                </article>
                <article className="content">
                    <h2>Events</h2>
                    <div className="button">
                        <Button onClick={() => setShowEventsModal(true)} name="Create an Event" />
                    </div>
                </article>
            </section>
            <CreatePerformer show={showPersonasModal} onClose={() => setShowPersonasModal(false)} />
            <CreateEvent show={showEventsModal} onClose={() => setShowEventsModal(false)} />
        </div>
    );
}

export default Account;
