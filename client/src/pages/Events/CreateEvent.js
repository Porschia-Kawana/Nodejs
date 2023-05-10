import React, { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';

import Form from "../../templates/form";
import Modal from "../../templates/modal";
import Input from "../../molecules/InputWithLabel";

function CreateEvent(props) {
    const { user } = useAuth0();

    const [data, setData] = useState({
        datetime: new Date(),
        created_by: user.sub
    })

    const handleInputChange = (input, value) => {
        const update = { ...data }
        update[input] = value
        setData(update)
    }

    const saveEvent = () => {
        const formData = new FormData()
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("venue", data.venue);
        formData.append("address", data.address);
        formData.append("city", data.city);
        formData.append("url", data.url);
        formData.append("facebook_url", data.facebook_url);
        formData.append("instagram_url", data.instagram_url);
        formData.append("price", data.price);
        formData.append("datetime", data.datetime);
        formData.append("created_by", data.created_by);
        formData.append("image", data.image);

        fetch("/api/event/create", {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <Modal show={props.show} onClose={props.onClose} title="Create an Event" onSave={saveEvent}>
            <div>
                <Form>
                    <Input required={true} value={data.title} label={`Event title`} onChange={(e) => handleInputChange("title", e.target.value)} />
                    <Input type="textarea" required={false} value={data.description} label={`Description`} onChange={(e) => handleInputChange("description", e.target.value)} />
                    <Input type="file" required={false} value={data.image} label={`Profile Image`} onChange={(e) => handleInputChange("image", e)} />
                </Form>
            </div>
            <div>
                <Form>
                    <Input required={false} value={data.venue} label={`Venue name`} onChange={(e) => handleInputChange("venue", e.target.value)} />
                    <Input required={false} value={data.address} label={`Address`} onChange={(e) => handleInputChange("address", e.target.value)} />
                    <Input required={false} value={data.city} label={`City`} onChange={(e) => handleInputChange("city", e.target.value)} />
                </Form>
            </div>
            <div>
                <Form>
                    <Input type="date" required={false} value={data.date} label={`Date`} onChange={(e) => handleInputChange("date", e.target.value)} />
                    <Input type="time" required={false} value={data.time} label={`Time`} onChange={(e) => handleInputChange("time", e.target.value)} />
                    <Input type="number" required={false} value={data.price} label={`Price`} onChange={(e) => handleInputChange("price", e.target.value)} />
                </Form>
            </div>
            <div>
                <Form>
                    <Input required={false} value={data.url} label={`URL`} onChange={(e) => handleInputChange("url", e.target.value)} />
                    <Input required={false} value={data.instagram_url} label={`Instagram URL`} onChange={(e) => handleInputChange("instagram_url", e.target.value)} />
                    <Input required={false} value={data.facebook_url} label={`Facebook URL`} onChange={(e) => handleInputChange("facebook_url", e.target.value)} />
                </Form>
            </div>
        </Modal>
    );
}

export default CreateEvent;
