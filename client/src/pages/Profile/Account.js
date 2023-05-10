import React, { useEffect, useState } from "react";
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

import CreateEvent from "../Events/CreateEvent";
import CreatePerformer from "../Performers/CreatePerformer";

import Button from '../../atoms/button'

import './Profile.scss';
import ImageDisplay from "../../atoms/image";
import Card from "../../molecules/cards";

function Account(props) {
    const [showEventsModal, setShowEventsModal] = useState(false);
    const [showPersonasModal, setShowPersonasModal] = useState(false);

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch(`api/event/${props.user.sub}`)
            .then((res) => {
                return res.text();
            })
            .then((res) => {
                const response = JSON.parse(res)
                const events = response.map((event) => {
                    return {
                        title: event.title,
                        description: event.description,
                        imageId: event.image,
                        details: [event.venue, event.city]
                    }
                })
                console.log(events)
                setEvents(events)
            })
            .catch((error) => {
                console.log('Request failed', error)
            });
    }, [])

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
                    <div>
                        {events && events.map((event) => (
                            <Card data={event} />
                        ))}
                    </div>
                </article>
            </section>
            <CreatePerformer show={showPersonasModal} onClose={() => setShowPersonasModal(false)} />
            <CreateEvent show={showEventsModal} onClose={() => setShowEventsModal(false)} />
        </div>
    );
}

export default Account;
