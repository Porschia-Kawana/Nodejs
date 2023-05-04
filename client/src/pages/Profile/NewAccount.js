import React, { useEffect, useState } from "react";

import Form from '../../templates/form/index';
import Input from '../../atoms/input';

import './Profile.scss';

function NewAccount(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const submitAccount = (e) => {
        debugger;
        if (email && firstName && lastName) {
            fetch(`/api/user/${props.data.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    email: email,
                    first_name: firstName,
                    last_name: lastName
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then(() => {
                    localStorage.removeItem("newAccount");
                    props.openProfile()
                })
                .catch((err) => {
                    console.log(err.message);
                });
        } else {
            e.stopPropagation()
        }
    }

    useEffect(() => {
        if (props.data) {
            setEmail(props.data.email || "")
            setFirstName(props.data.first_name || "")
            setLastName(props.data.last_name || "")
        }
    }, [props.data])

    return (
        <section className="NewAccount">
            <h2>Welcome to your profile</h2>
            <Form onSubmit={submitAccount} button="Continue">
                <div className="form__row">
                    <Input value={firstName} placeholder='First name' required={true} onChange={(e) => setFirstName(e.target.value)} />
                    <Input value={lastName} placeholder='Last name' required={true} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form__row">
                    <Input value={email} placeholder='Email' required={true} onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder='Phone number' />
                </div>
            </Form>
        </section>
    );
}

export default NewAccount;
