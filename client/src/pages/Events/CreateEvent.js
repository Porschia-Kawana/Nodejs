import React, { useState } from "react";

import Form from "../../templates/form";
import Modal from "../../templates/modal";
import Input from "../../molecules/InputWithLabel";

function CreateEvent(props) {
    const [data, setData] = useState({
        title: "",
        description: "",
        venue: "",
        address: "",
        city: "",
        country: "",
        url: "",
        facebook_url: "",
        instagram_url: "",
        price: "",
        date: new Date(),
        time: "",
    })

    const handleInputChange = (input, value) => {
        const update = { ...data }
        update[input] = value
        setData(update)
    }

    const saveEvent = () => {
        console.log(data)
    }

    return (
        <Modal show={props.show} onClose={props.onClose} title="Create an Event">
            <div>
                <Form>
                    <Input required={false} value={data.title} label={`Event title`} onChange={(e) => handleInputChange("title", e.target.value)} />
                    <Input type="textarea" required={false} value={data.description} label={`Description`} onChange={(e) => handleInputChange("description", e.target.value)} />
                </Form>
            </div>
            <div>
                <Form>
                    <Input required={false} value={data.venue} label={`Venue name`} onChange={(e) => handleInputChange("venue", e.target.value)} />
                    <Input required={false} value={data.address} label={`Address`} onChange={(e) => handleInputChange("address", e.target.value)} />
                    <Input required={false} value={data.city} label={`City`} onChange={(e) => handleInputChange("city", e.target.value)} />
                    <Input required={false} value={data.country} label={`Country`} onChange={(e) => handleInputChange("country", e.target.value)} />
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
                <Form onSubmit={() => saveEvent()}>
                    <Input required={false} value={data.url} label={`URL`} onChange={(e) => handleInputChange("url", e.target.value)} />
                    <Input required={false} value={data.instagram_url} label={`Instagram URL`} onChange={(e) => handleInputChange("instagram_url", e.target.value)} />
                    <Input required={false} value={data.facebook_url} label={`Facebook URL`} onChange={(e) => handleInputChange("facebook_url", e.target.value)} />
                </Form>
            </div>
        </Modal>
    );
}

export default CreateEvent;
